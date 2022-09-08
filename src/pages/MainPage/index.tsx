import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useTheme, FAB } from 'react-native-paper'

import NetworkStatusSurface from './components/NetworkStatusSurface'
import MeoAccountSurface from './components/MeoAccountSurface'
import ConnectionMessageSurface from './components/ConnectionMessageSurface'

const MainPage:React.FC = () => {
	const { colors } = useTheme()
	const styles = makeStyles(useTheme())

	return (
		<View style={styles.container}>

			<NetworkStatusSurface />
			<MeoAccountSurface />
			<ConnectionMessageSurface />

			<FAB
				icon={'wifi'}
				onPress={() => console.log('Pressed')}
				style={styles.FAB}
				color={colors.onPrimaryVariant}
				// loading
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
	}

})

export default MainPage
