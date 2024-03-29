import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import { useTheme } from 'react-native-paper'

import useSettings from '@contexts/settings'

import IntroPage from '@pages/IntroPage'
import MainPage from '@pages/MainPage'
import MeoLoginPage from '@pages/MeoLoginPage'
import LocationPage from '@pages/LocationPage'

import OverflowMenu from './components/OverflowMenu'

export type RootStackParamList = {
	MainPage: undefined,
	MeoLoginPage: undefined,
	LocationPage: undefined,
}

const Routes = () => {
	const { settings: { showIntroduction }, areSettingsLoaded } = useSettings()
	const { colors } = useTheme()

	if (!areSettingsLoaded) {
		return <></>
	} else if (showIntroduction) {
		return <IntroPage />
	} else {
		return RootStack(colors)
	}
}

const RootStack = (colors: ReactNativePaper.ThemeColors) => {
	const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='MainPage'
				screenOptions={{
					headerStyle: { backgroundColor: colors.primary },

					title: '',
					headerTitleStyle: { fontSize: 20, color: colors.onPrimary }
				}}
			>
				<Screen
					name='MainPage'
					component={MainPage}

					options={{
						title: 'Meo WiFi Auto Login',
						headerRight: () => <OverflowMenu />
					}}
				/>

				<Screen
					name='MeoLoginPage'
					component={MeoLoginPage}
				/>

				<Screen
					name='LocationPage'
					component={LocationPage}
				/>

			</Navigator>
		</NavigationContainer>
	)
}

export const useNavigationRootStack = () => useNavigation<StackNavigationProp<RootStackParamList>>()

export default Routes
