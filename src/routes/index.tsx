import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import IntroductionPage from '@pages/IntroductionPage'
import MainPage from '@pages/MainPage'

export type RootStackParamList = {
	IntroductionPage: undefined,
	MainPage: undefined,
}

const Routes = () => {
	const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

	return (
		<NavigationContainer>
			<Navigator>
				<Screen
					name='IntroductionPage'
					component={IntroductionPage}
					options={{ headerShown: false }}
				/>

				<Screen
					name='MainPage'
					component={MainPage}
					options={{ headerShown: false }}
				/>
			</Navigator>
		</NavigationContainer>
	)
}

export const useNavigationRootStack = () => useNavigation<StackNavigationProp<RootStackParamList>>()

export default Routes
