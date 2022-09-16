import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { useTheme, FAB } from 'react-native-paper'

import { useNavigationRootStack } from '@routes/index'

import NetworkStatusSurface from './components/NetworkStatusSurface'
import MeoAccountSurface from './components/MeoAccountSurface'
import ConnectionMessageSurface from './components/ConnectionMessageSurface'

import useMeoAccount from '@contexts/meoAccount'

import { useNetInfo } from '@react-native-community/netinfo'
import { meoWifiLogin } from 'meo-wifi-login'

type loginRequestStatus = 'null' | 'requesting' | 'error' | 'success'

const MainPage:React.FC = () => {
	const { colors } = useTheme()
	const styles = makeStyles(useTheme())

	const { navigate } = useNavigationRootStack()

	const netInfo = useNetInfo()

	const [loginRequestStatus, setLoginRequestStatus] = useState<loginRequestStatus>('null')

	const connectedOnMeoWiFi = (netInfo.details?.ssid || '') === 'MEO-WiFi'
	const connectedOnInternet = netInfo.isInternetReachable || false

	const { credentials: { email, password } } = useMeoAccount()
	const IP: string = netInfo.details?.ipAddress || ''

	const [connectionMessage, setConnectionMessage] = useState('')

	const connectButtonPressed = async () => {
		if (!email || !password) {
			navigate('MeoLoginPage')
			return
		}

		setLoginRequestStatus('requesting')

		const res = await meoWifiLogin(email, password, IP || '0.0.0.0')

		setLoginRequestStatus(res.success ? 'success' : 'error')
		setConnectionMessage(res.message)
	}

	return (
		<View style={styles.container}>

			<NetworkStatusSurface
				connectedOnMeoWiFi={connectedOnMeoWiFi}
				connectedOnInternet={connectedOnInternet}
			/>

			<MeoAccountSurface
				email={email}
				IP={IP}
			/>

			<ConnectionMessageSurface
				connectionMessage={connectionMessage}
				missingMeoAccountCredentials={!email || !password}
			/>

			<FAB
				icon={'wifi'}
				onPress={connectButtonPressed}
				style={[styles.FAB, loginRequestStatus === 'error' ? styles.FAB_Error : {}]}
				color={loginRequestStatus !== 'error' ? colors.onPrimaryVariant : colors.onError}
				loading={loginRequestStatus === 'requesting'}
			/>

		</View>
	)
}

const makeStyles = ({ colors, spacing }: ReactNativePaper.Theme) => StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.background,

		paddingTop: spacing.margin,
		paddingHorizontal: spacing.margin
	},

	FAB: {
		position: 'absolute',
		bottom: spacing.margin,
		right: spacing.margin,

		backgroundColor: colors.primaryVariant
	},

	FAB_Error: {
		backgroundColor: colors.error
	}

})

export default MainPage
