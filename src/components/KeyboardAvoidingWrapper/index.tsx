import React from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View } from 'react-native'

interface Props {
  children: JSX.Element,
	backgroundColor: string
}

const KeyboardAvoidingWrapper:React.FC<Props> = ({ children, backgroundColor }) => {
	return (
		<View style={{ flex: 1, backgroundColor: '#F4F5F6' }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
				<KeyboardAvoidingView
					behavior="position"
					style={{ flex: 1, backgroundColor }}
					contentContainerStyle={{ flex: 1 }}
				>
					{children}
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	)
}

export default KeyboardAvoidingWrapper
