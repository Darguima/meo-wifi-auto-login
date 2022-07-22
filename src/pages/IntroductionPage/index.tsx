import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Button, Text } from 'react-native-paper'

import useSettings from '@contexts/settings'

const IntroductionPage:React.FC = () => {
	const { changeSettings } = useSettings()
	return (
		<View style={styles.container}>
			<Text>Introduction Page</Text>
			<Button
				mode="contained"
				icon="rocket"
				onPress={() => changeSettings({ showIntroduction: false })}
			>
        Let's go!!
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',

		backgroundColor: '#fff'
	}
})

export default IntroductionPage
