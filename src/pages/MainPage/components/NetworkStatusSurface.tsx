import React from 'react'
import { View, StyleSheet } from 'react-native'

import { HelperText, Surface, Text, TouchableRipple, useTheme } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import useSettings from '@contexts/settings'
import { useNavigationRootStack } from '@routes/index'

interface Props {
	connectedOnMeoWiFi: boolean,
	connectedOnInternet: boolean
}

const NetworkStatusSurface:React.FC<Props> = ({ connectedOnMeoWiFi, connectedOnInternet }) => {
	const { colors } = useTheme()
	const styles = makeStyles(useTheme())

	const { settings: { hasLocationPermissions } } = useSettings()
	const { navigate } = useNavigationRootStack()

	return (
		<Surface style={styles.surface}>
			<Text style={styles.surfaceTitle}>
					Network Status
			</Text>

			<TouchableRipple
				style={styles.surfaceRow}
				onPress={() => navigate('LocationPage')}
				disabled={hasLocationPermissions}
			>
				<>
					<View>
						<Text>
						Connected on Meo WiFi
						</Text>

						{!connectedOnMeoWiFi &&
						<HelperText type='info'>
							{hasLocationPermissions ? "Don't forget to turn on location!" : 'Location needed, press me!'}
						</HelperText>
						}
					</View>

					<MaterialCommunityIcons
						name={connectedOnMeoWiFi ? 'wifi' : (hasLocationPermissions ? 'wifi-off' : 'wifi-marker')}
						size={24}
						color={connectedOnMeoWiFi ? colors.primaryVariant : colors.error}
					/>
				</>
			</TouchableRipple>

			<View style={styles.surfaceRow}>
				<Text>
					Connected on Internet
				</Text>

				<MaterialCommunityIcons
					name={connectedOnInternet ? 'wifi' : 'wifi-off'}
					size={24}
					color={connectedOnInternet ? colors.primaryVariant : colors.error}
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
		paddingHorizontal: 6
		// Right padding is needed due TouchableRipple
	}
})

export default NetworkStatusSurface
