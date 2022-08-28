import React from 'react'
import { Linking, StyleSheet } from 'react-native'

import { Button, Text, useTheme } from 'react-native-paper'

import IntroScreen from '@components/IntroScreen'

import useSettings from '@contexts/settings'

const MeoPage:React.FC = () => {
	const styles = makeStyles(useTheme().colors)

	const { changeSettings } = useSettings()

	return (
		<IntroScreen
			iconName='account-circle-outline'
			title='Meo Account'

			centerContent={
				<>
					<Text style={[styles.infoText, { fontWeight: 'bold' }]}>Now it{"'"}s time to log in to your Meo Client Account!</Text>

					<Text style={styles.infoText}>
						Your password will be securely protected with{' '}
						<Text onPress={() => Linking.openURL('https://github.com/oblador/react-native-keychain')} style={styles.link}>react-native-keychain</Text>
						.
					</Text>

					<Text style={styles.infoText}>To this work properly you need have a valid account, with an internet service.</Text>
				</>
			}

			bottomContent={
				<Button
					mode="contained"

					onPress={() => {
						changeSettings({ showIntroduction: false })
					}}

					style={styles.button}
					labelStyle={styles.buttonText}
				>
					Get Started
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

	link: {
		color: colors.url
	},

	button: {
		marginVertical: 16,
		height: 36,
		minWidth: 64,
		backgroundColor: colors.primaryVariant
	},

	buttonText: {
		color: colors.onPrimaryVariant
	}
})

export default MeoPage
