import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'

import { useTheme } from 'react-native-paper'

import Footer from './Components/Footer'

import FirstPage from './Components/FirstPage'
import LocationPage from './Components/LocationPage'
import MeoPage from './Components/MeoPage'

const IntroductionPage:React.FC = () => {
	const styles = makeStyles(useTheme().colors)

	const [pageIndex, setPageIndex] = useState(0)

	return (
		<View style={styles.container}>

			<ScrollView
				horizontal={true}
				pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				onScroll={({ nativeEvent: { contentOffset: { x: xPosition } } }) => {
					setPageIndex(Math.round(xPosition / Dimensions.get('window').width))
				}}
			>

				<FirstPage />
				<LocationPage />
				<MeoPage />

			</ScrollView>

			<Footer
				amountOfPages={3}
				currentPageIndex={pageIndex}
			/>

		</View>
	)
}

const makeStyles = (colors : ReactNativePaper.ThemeColors) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background
	}
})

export default IntroductionPage
