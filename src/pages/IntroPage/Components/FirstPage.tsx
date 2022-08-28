import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { Text, useTheme } from 'react-native-paper'

import IntroScreen from '@components/IntroScreen'

const LocationPage:React.FC = () => {
	const colors = useTheme().colors
	const styles = makeStyles(colors)

	return (
		<IntroScreen
			icon={
				<Image
					source={require('@assets/LogoRounded.png')}
					style={styles.logoImage}
				/>
			}
			iconBackgroundColor={colors.surfaceVariant}

			title={
				<>
					<View>
						<Text style={styles.titleText}>Welcome to</Text>
						<Text style={styles.titleText}>Meo WiFi Auto Login</Text>
					</View>
				</>
			}

			centerContent={
				<>
					<Text style={[styles.infoText, { fontWeight: 'bold' }]}>Looking for an App that automates your Meo WiFi login? Here it is!</Text>
					<Text style={styles.infoText}>Let{"'"}s just do some initial settings ...</Text>
				</>
			}
		/>
	)
}

const makeStyles = (colors :ReactNativePaper.ThemeColors) => StyleSheet.create({
	logoImage: {
		height: '75%',
		width: '75%'
	},

	titleText: {
		textAlign: 'center',
		color: colors.primary,
		fontSize: 20,
		fontWeight: 'bold'
	},

	infoText: {
		textAlign: 'center',
		marginVertical: 8
	}
})

export default LocationPage
