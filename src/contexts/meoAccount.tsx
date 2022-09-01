import React, { createContext, useContext, useEffect, useState } from 'react'
import { ToastAndroid } from 'react-native'

import { setGenericPassword, getGenericPassword } from 'react-native-keychain'

const defaultCredentials = { email: '', password: '' }

type MeoAccountCredentials = typeof defaultCredentials

interface MeoAccountContextData {
	credentials: MeoAccountCredentials,
	setCredentials: React.Dispatch<React.SetStateAction<MeoAccountCredentials>>
}

const MeoAccountContext = createContext<MeoAccountContextData>({ credentials: defaultCredentials } as MeoAccountContextData)

export const MeoAccountProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	const [credentials, setCredentials] = useState(defaultCredentials)

	useEffect(() => {
		if (credentials.email && credentials.password) {
			setGenericPassword(credentials.email, credentials.password)
		}
	}, [credentials])

	useEffect(() => {
		getGenericPassword()
			.then(credentials => {
				if (credentials) {
					setCredentials({
						email: credentials.username,
						password: credentials.password
					})
				} else {
					setCredentials(defaultCredentials)
				}
			})
			.catch(() => {
				ToastAndroid.show('Unknown Error - KeyChain', ToastAndroid.CENTER)
				setCredentials(defaultCredentials)
			})
	}, [])

	return (
		<MeoAccountContext.Provider value={{
			credentials,
			setCredentials
		}}>
			{children}
		</MeoAccountContext.Provider>
	)
}

export default () => (useContext(MeoAccountContext))
