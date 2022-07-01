import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigationRootStack } from '@routes/index'

import { Button, Text } from 'react-native-paper'

const IntroductionPage:React.FC = () => {
  const { navigate } = useNavigationRootStack()

  return (
    <View style={styles.container}>
      <Text>Introduction Page</Text>
      <Button
        mode="contained"
        icon="rocket"
        onPress={() => { navigate('MainPage') }}
      >
        Let's go!!
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})

export default IntroductionPage
