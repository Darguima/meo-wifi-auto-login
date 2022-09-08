import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { IconButton, Menu, useTheme } from 'react-native-paper'

import { useNavigationRootStack } from '@routes/index'

const OverflowMenu = () => {
	const colors = useTheme().colors
	const styles = makeStyles(colors)

	const { navigate } = useNavigationRootStack()

	const [visible, setVisible] = React.useState(false)

	return (
		<View
			style={styles.container}>
			<Menu
				visible={visible}
				onDismiss={() => setVisible(false)}

				anchor={
					<IconButton
						icon="dots-vertical"
						color={colors.onPrimary}
						// Icon - 24dp; icon container - 36dp; icon container margin right 8dp
						size={24}
						onPress={() => setVisible(true)}
						style={styles.anchor}
					/>
				}
			>

				<Menu.Item
					onPress={() => {
						navigate('MeoLoginPage')
						setVisible(false)
					}}
					title="Meo Account"
				/>
			</Menu>
		</View>
	)
}

const makeStyles = (colors :ReactNativePaper.ThemeColors) => StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		marginRight: 8
	},

	anchor: {
		margin: 0,
		height: 36,
		width: 36
	}
})

export default OverflowMenu
