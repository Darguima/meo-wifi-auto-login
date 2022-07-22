import React from 'react'

import Routes from './src/routes'

import { SettingsProvider } from '@contexts/settings'
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => (
	<SettingsProvider>
		<PaperProvider>
			<Routes />
		</PaperProvider>
	</SettingsProvider>
)

export default App
