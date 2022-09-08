import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Surface, Text, useTheme } from 'react-native-paper'

const ConnectionMessageSurface:React.FC = () => {
	const styles = makeStyles(useTheme())

	return (
		<Surface style={styles.surface}>
			<Text style={styles.surfaceTitle}>
					Connection Message
			</Text>

			<View style={styles.surfaceRow}>
				<Text>
					Invalid Credentials
				</Text>
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
		justifyContent: 'center',

		paddingVertical: spacing.padding
		// paddingLeft: 6
	}
})

export default ConnectionMessageSurface
