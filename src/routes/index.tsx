import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import IntroductionPage from '@pages/IntroductionPage'
import MainPage from '@pages/MainPage'

import useSettings from '@contexts/settings'

export type RootStackParamList = {
	MainPage: undefined,
}

const Routes = () => {
	const { settings: { showIntroduction }, areSettingsLoaded } = useSettings()

	if (!areSettingsLoaded) {
		return <></>
	} else if (showIntroduction) {
		return <IntroductionPage />
	} else {
		return RootStack()
	}
}

const RootStack = () => {
	const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

	return (
		<NavigationContainer>
			<Navigator>
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
