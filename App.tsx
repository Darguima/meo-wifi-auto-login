import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './src/routes'

import { MeoAccountProvider } from '@contexts/meoAccount'
import { SettingsProvider } from '@contexts/settings'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

export const overrideTheme = {
	...DefaultTheme,

	version: 2,

	spacing: {
		// https://material.io/design/layout/responsive-layout-grid.html
		margin: 16,

		padding: 16,
		divisionPadding: 8 // to use as a space between text and icons for example
	},

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
		onError: '#FFFFFF',

		url: '#0077ff'
	}
}

const App = () => (
	<SettingsProvider>
		<MeoAccountProvider>
			<PaperProvider theme={overrideTheme}>

				<StatusBar backgroundColor={overrideTheme.colors.primary} barStyle="dark-content" />
				<Routes />

			</PaperProvider>
		</MeoAccountProvider>
	</SettingsProvider>
)

export default App
