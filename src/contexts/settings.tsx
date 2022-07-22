import React, { createContext, useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const settingsDefault = {
	showIntroduction: true
}

type settingsSchema = typeof settingsDefault

interface SettingsContextData {
	areSettingsLoaded: boolean,

	settings: settingsSchema,
	changeSettings: (newSetting: Partial<settingsSchema>) => void
}

const SettingsContext = createContext<SettingsContextData>({
	areSettingsLoaded: false,
	settings: settingsDefault
} as SettingsContextData)

export const SettingsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	const [areSettingsLoaded, setAreSettingsLoaded] = useState(false)

	const [settings, setSettings] = useState<settingsSchema>(settingsDefault)

	useEffect(() => {
		AsyncStorage.getItem('@settings')
			.then((json) => {
				if (json) {
					setSettings({ ...settingsDefault, ...JSON.parse(json) })
				}
			})
			.catch()
			.finally(() => { setAreSettingsLoaded(true) })
	}, [])

	const changeSettings = (newSetting: Partial<settingsSchema>) => {
		const newSettings = { ...settingsDefault, ...settings, ...newSetting }

		setSettings(newSettings)
		AsyncStorage.setItem('@settings', JSON.stringify(newSettings))
	}

	return (
		<SettingsContext.Provider value={{
			areSettingsLoaded,

			settings,
			changeSettings
		}}>
			{children}
		</SettingsContext.Provider>
	)
}

export default () => (useContext(SettingsContext))
