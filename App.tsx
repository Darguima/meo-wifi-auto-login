import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './src/routes'

import { SettingsProvider } from '@contexts/settings'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

export const overrideTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,

		primary: '#009EBB',
		onPrimary: '#000000',

		primaryVariant: '#7DD6E9',
		onPrimaryVariant: '#000000',

		surfaceVariant: '#DFF5FA',

		background: '#fff',
		onBackground: '#000000',

		error: '#b00020',

		url: '#0077ff'
	}
}

const App = () => (
	<SettingsProvider>
		<PaperProvider theme={overrideTheme}>

			<StatusBar backgroundColor={overrideTheme.colors.primary} />
			<Routes />

		</PaperProvider>
	</SettingsProvider>
)

export default App
