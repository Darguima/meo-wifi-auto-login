import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import { Button, Text, useTheme } from 'react-native-paper'

import IntroScreen from '@components/IntroScreen'

import { requestLocationPermission } from '@utils/requestPermissions'

const LocationPage:React.FC = () => {
	const styles = makeStyles(useTheme().colors)

	const [permissionGranted, setPermissionGranted] = useState(false)

	return (
		<IntroScreen
			iconName={!permissionGranted ? 'map-marker-alert-outline' : 'map-marker-check-outline'}
			title='Location Permission'

			centerContent={
				<>
					<Text style={styles.infoText}>For a better experience, allow us to access your location.</Text>
					<Text style={[styles.infoText, { fontWeight: 'bold' }]}>Why we need it to login on a network?</Text>
					<Text style={styles.infoText}>For your security, Android consider that your network information is a way to locate you, so we need your permission.</Text>
				</>
			}

			bottomContent={
				<Button
					mode="contained"

					onPress={async () => {
						setPermissionGranted(await requestLocationPermission())
					}}

					style={styles.permissionButton}
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
	}
})

export default LocationPage
