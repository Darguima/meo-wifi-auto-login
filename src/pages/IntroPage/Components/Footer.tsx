import React from 'react'
import { View, StyleSheet } from 'react-native'

import { useTheme } from 'react-native-paper'

interface FooterProps {
	amountOfPages: number
	currentPageIndex: number
}

const Footer:React.FC<FooterProps> = ({ amountOfPages, currentPageIndex }) => {
	const styles = makeStyles(useTheme().colors, amountOfPages)

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{Array(amountOfPages).fill(null).map((_, pageIndex) => <View
					style={[
						styles.pageIndicator,
						pageIndex === currentPageIndex ? styles.pageIndicatorSelected : {}
					]}
					key={pageIndex}
				/>)}
			</View>
		</View>
	)
}

const makeStyles = (colors :ReactNativePaper.ThemeColors, amountOfPages: number) => StyleSheet.create({
	container: {
		height: 56,
		width: '100%',

		alignItems: 'center',

		backgroundColor: colors.surfaceVariant
	},

	content: {
		height: '100%',
		width: (10 + 16) * amountOfPages, // 8px space between dots

		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},

	pageIndicator: {
		width: 10,
		height: 10,
		borderRadius: 10 / 2,
		backgroundColor: colors.primaryVariant
	},

	pageIndicatorSelected: {
		width: 12,
		height: 12,
		borderRadius: 12 / 2,

		backgroundColor: colors.primary
	}
})

export default Footer
