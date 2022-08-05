import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Button, Text, useTheme } from 'react-native-paper'

import useSettings from '@contexts/settings'

const IntroductionPage:React.FC = () => {
	const styles = makeStyles(useTheme().colors)

	const { changeSettings } = useSettings()

	return (
		<View style={styles.container}>
			<Text>Introduction Page</Text>
			<Button
				mode="contained"
				icon="rocket"
				style={styles.button}
				onPress={() => changeSettings({ showIntroduction: false })}
			>
        Let's go!!
			</Button>
		</View>
	)
}

const makeStyles = (colors : ReactNativePaper.ThemeColors) => StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',

		backgroundColor: colors.background
	},

	button: {
		backgroundColor: colors.primaryVariant
	}
})

export default IntroductionPage
