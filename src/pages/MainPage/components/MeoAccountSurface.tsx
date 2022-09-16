import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Surface, Text, useTheme } from 'react-native-paper'

interface Props {
	email: string,
	IP: string
}

const MeoAccountSurface:React.FC<Props> = ({ email, IP }) => {
	const styles = makeStyles(useTheme())

	return (
		<Surface style={styles.surface}>
			<Text style={styles.surfaceTitle}>
					Meo Account
			</Text>

			<View style={styles.surfaceRow}>
				<Text>
					E-mail:
				</Text>

				<Text style={styles.underlinedText}>
					{email || 'Not provided'}
				</Text>
			</View>

			<View style={styles.surfaceRow}>
				<Text>
					IP:
				</Text>

				<Text>{IP || '...'}</Text>
			</View>

		</Surface>
	)
}

const makeStyles = ({ spacing }: ReactNativePaper.Theme) => StyleSheet.create({
	surface: {
		elevation: 6,
		width: '100%',
		maxWidth: 400,

		borderRadius: 8,

		padding: spacing.padding,
		marginBottom: spacing.margin
	},

	surfaceTitle: {
		fontSize: 18,
		fontWeight: 'bold',

		paddingVertical: spacing.divisionPadding
	},

	surfaceRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',

		paddingVertical: spacing.divisionPadding,
		paddingLeft: 6
	},

	underlinedText: {
		textDecorationLine: 'underline'
	}
})

export default MeoAccountSurface
