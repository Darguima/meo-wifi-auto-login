import React from 'react'
import { StyleSheet } from 'react-native'

import { Button, Text, useTheme } from 'react-native-paper'

import IntroScreen from '@components/IntroScreen'

import useSettings from '@contexts/settings'

import { requestLocationPermission } from '@utils/requestPermissions'

const LocationPage:React.FC = () => {
	const styles = makeStyles(useTheme().colors)

	const { settings: { hasLocationPermissions }, changeSettings } = useSettings()

	return (
		<IntroScreen
			iconName={!hasLocationPermissions ? 'map-marker-alert-outline' : 'map-marker-check-outline'}
			title={!hasLocationPermissions ? 'Location Permission' : 'Permission Granted'}

			centerContent={
				<>
					{!hasLocationPermissions &&
						<Text style={styles.infoText}>For a better experience, allow us to access your location.</Text>
					}
					{hasLocationPermissions &&
						<Text style={styles.infoText}>Thanks for trust your location.</Text>
					}

					<Text style={[styles.infoText, { fontWeight: 'bold' }]}>
						Why we need it to login on Meo WiFi?
					</Text>

					<Text style={styles.infoText}>
						For your security, Android consider that your network information is a way to locate you, so we need your permission{hasLocationPermissions && ' for a better experience'}.
					</Text>
				</>
			}

			bottomContent={
				<Button
					mode="contained"

					disabled={hasLocationPermissions}

					onPress={async () => {
						changeSettings({ hasLocationPermissions: await requestLocationPermission() })
					}}

					style={[styles.permissionButton, hasLocationPermissions ? styles.disabledButton : {}]}
					labelStyle={styles.permissionButtonText}
				>
						Grant Permission
				</Button>
			}
		/>
	)
}

const makeStyles = (colors :ReactNativePaper.ThemeColors) => StyleSheet.create({
	infoText: {
		textAlign: 'center',
		marginVertical: 8
	},

	permissionButton: {
		backgroundColor: colors.primaryVariant,
		marginBottom: 32
	},

	permissionButtonText: {
		color: colors.onPrimaryVariant
	},

	disabledButton: { opacity: 0.6 }
})

export default LocationPage
