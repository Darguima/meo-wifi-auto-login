import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

import { Button, HelperText, TextInput, useTheme } from 'react-native-paper'

import KeyboardAvoidingWrapper from '@components/KeyboardAvoidingWrapper'
import IntroScreen from '@components/IntroScreen'

import useMeoAccountContext from '@contexts/meoAccount'

import isEmailValid from '@utils/isEmailValid'

const MeoLoginPage:React.FC = () => {
	const colors = useTheme().colors
	const styles = makeStyles(colors)

	const { goBack } = useNavigation()

	const { credentials, setCredentials } = useMeoAccountContext()

	const [newEmail, setNewEmail] = useState('')
	const [emailInputError, setEmailInputError] = useState('')

	const [newPassword, setNewPassword] = useState('')
	const [passwordInputError, setPasswordInputError] = useState('')

	const [showPassword, setShowPassword] = useState(false)

	useEffect(() => {
		setNewEmail(credentials.email)
		setNewPassword(credentials.password)
	}, [credentials])

	const onSaveButtonPressed = () => {
		setEmailInputError(newEmail === '' ? 'Email Required!' : '')
		setPasswordInputError(newPassword === '' ? 'Password Required!' : '')

		if (newEmail && newPassword) {
			if (!isEmailValid(newEmail)) {
				setEmailInputError('Email Invalid!')

				return
			}

			setCredentials({ email: newEmail, password: newPassword })
			goBack()
		}
	}

	return (
		<KeyboardAvoidingWrapper backgroundColor={colors.background}>
			<IntroScreen
				iconName='account-circle-outline'
				title='Meo Account'

				containerViewStyle={styles.container}
				iconContainerViewStyle={styles.iconContainer}

				centerContent={
					<>
						<TextInput
							style={styles.loginTextInput}
							mode='outlined'

							label="E-mail"
							left={<TextInput.Icon name="account-outline" />}

							value={newEmail}
							onChangeText={text => {
								setEmailInputError(text === '' ? 'Email Required!' : '')

								setNewEmail(text)
							}}

							error={!!emailInputError}

							autoCapitalize="none"
							autoCorrect={false}
							autoComplete="email"
						/>

						<HelperText
							style={styles.inputHelperText}
							type="error"
							visible={!!emailInputError}
						>
							{emailInputError}
						</HelperText>

						<TextInput
							style={styles.loginTextInput}
							mode='outlined'

							label="Password"

							left={<TextInput.Icon name="lock-outline" />}
							right={<TextInput.Icon
								name={showPassword ? 'eye-off-outline' : 'eye-outline'}
								onPress={() => { setShowPassword(!showPassword) }} />
							}

							value={newPassword}
							secureTextEntry={!showPassword}
							onChangeText={text => {
								setPasswordInputError(text === '' ? 'Password Required!' : '')

								setNewPassword(text)
							}}

							error={!!passwordInputError}
						/>

						<HelperText
							style={styles.inputHelperText}
							type="error"
							visible={!!passwordInputError}
						>
						Password required!
						</HelperText>

					</>
				}

				bottomContent={
					<Button
						mode="contained"

						style={styles.button}
						labelStyle={styles.buttonText}

						onPress={onSaveButtonPressed}
					>
						Save
					</Button>
				}
			/>
		</KeyboardAvoidingWrapper>
	)
}

const makeStyles = (colors :ReactNativePaper.ThemeColors) => StyleSheet.create({
	container: {
		backgroundColor: colors.background
	},

	iconContainer: {
		marginTop: 32
	},

	loginTextInput: {
		width: 280

	},

	inputHelperText: {
		width: 280,

		marginBottom: 8
	},

	button: {
		marginVertical: 16,
		height: 36,
		minWidth: 64,
		backgroundColor: colors.primaryVariant
	},

	buttonText: {
		color: colors.onPrimaryVariant
	}
})

export default MeoLoginPage
