import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Surface, Text, useTheme } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const NetworkStatusSurface:React.FC = () => {
	const { colors } = useTheme()
	const styles = makeStyles(useTheme())

	return (
		<Surface style={styles.surface}>
			<Text style={styles.surfaceTitle}>
					Network Status
			</Text>

			<View style={styles.surfaceRow}>
				<Text>
					Connected on Meo WiFi
				</Text>

				<MaterialCommunityIcons
					name={'wifi'}
					size={24}
					color={colors.primaryVariant}
				/>
			</View>

			<View style={styles.surfaceRow}>
				<Text>
					Connected on Internet
				</Text>

				<MaterialCommunityIcons
					name={'wifi-off'}
					size={24}
					color={colors.error}
				/>
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
	}
})

export default NetworkStatusSurface
