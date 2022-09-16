import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Surface, Text, Avatar, useTheme } from 'react-native-paper'

interface Props {
	connectionMessage: string,
	missingMeoAccountCredentials?: boolean
}

const ConnectionMessageSurface:React.FC<Props> = ({ connectionMessage, missingMeoAccountCredentials }) => {
	const colors = useTheme().colors
	const styles = makeStyles(useTheme())

	return (
		<Surface style={styles.surface}>
			<Text style={styles.surfaceTitle}>
					Connection Message
			</Text>

			{!connectionMessage &&
			<>
				{missingMeoAccountCredentials &&
					<View style={styles.surfaceRow}>
						<Text>Press </Text>
						<Avatar.Icon
							icon="dots-vertical"
							size={24}
							style={styles.miniFABIcon}
							color={colors.onPrimaryVariant}
						/>
						<Text> to fill your Meo Account credentials.</Text>
					</View>
				}

				<View style={styles.surfaceRow}>
					<Text>Press </Text>
					<Avatar.Icon
						icon="wifi"
						size={24}
						style={styles.miniFABIcon}
						color={colors.onPrimaryVariant}
					/>
					<Text> to login on Meo WiFi.</Text>
				</View>
			</>
			}

			{!!connectionMessage &&
				<View style={styles.surfaceRow}>
					<Text>{connectionMessage}</Text>
				</View>
			}

		</Surface>
	)
}

const makeStyles = ({ colors, spacing }: ReactNativePaper.Theme) => StyleSheet.create({
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
		alignItems: 'center',

		paddingVertical: spacing.padding
		// paddingLeft: 6
		// This Surface Rows are centered, so no need of padding left
	},

	miniFABIcon: { backgroundColor: colors.primaryVariant }
})

export default ConnectionMessageSurface
