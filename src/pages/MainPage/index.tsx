import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { useNavigationRootStack } from '@routes/index'

const MainPage: React.FC = () => {
	const { navigate } = useNavigationRootStack()

	return (
		<View style={styles.container}>
			<Text>Main Page</Text>

			<Button
				mode='contained'
				onPress={() => navigate('MeoLoginPage')}
			>
				Meo Account
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	}
})

export default MainPage
