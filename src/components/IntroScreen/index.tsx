import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { useTheme } from 'react-native-paper'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
	iconName?: string,
	title: string | React.ReactNode,

	icon?: React.ReactNode,
	iconBackgroundColor?: string,

	centerContent: React.ReactNode,
	bottomContent?: React.ReactNode,
}

const IntroScreen:React.FC<Props> = ({
	iconName = 'border-none-variant', title,
	icon, iconBackgroundColor,
	centerContent, bottomContent
}) => {
	const colors = useTheme().colors
	const styles = makeStyles(colors, iconBackgroundColor)

	return (
		<View style={styles.container}>

			<View style={styles.topContainer}>

				<View style={styles.iconContainer}>
					{
						!icon &&
						<MaterialCommunityIcons
							name={iconName}
							size={150}
							color={colors.onPrimaryVariant}
						/>
					}

					{icon}

				</View>

				<Text style={styles.titleText}>{title}</Text>

			</View>

			<View style={styles.centerContentContainer}>
				{centerContent}
			</View>

			<View style={styles.bottomContentContainer}>
				{bottomContent}
			</View>

		</View>
	)
}

const makeStyles = (colors :ReactNativePaper.ThemeColors, iconBackgroundColor?: string) => StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',

		width: Dimensions.get('window').width,
		flex: 1,

		paddingHorizontal: 16,

		backgroundColor: colors.surfaceVariant
	},

	topContainer: {
		alignItems: 'center',
		width: '100%'
	},

	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',

		width: 200,
		aspectRatio: 1,

		borderRadius: 200 / 2,
		backgroundColor: iconBackgroundColor || colors.primaryVariant,

		marginTop: 56
	},

	titleText: {
		textAlign: 'center',
		color: colors.primary,
		fontSize: 20,
		fontWeight: 'bold',

		marginVertical: 32
	},

	centerContentContainer: {
		alignItems: 'center',

		width: '100%',

		paddingTop: 8
	},

	bottomContentContainer: {
		marginVertical: 16
	}
})

export default IntroScreen
