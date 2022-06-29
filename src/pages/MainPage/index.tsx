import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'

const MainPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <Button mode="contained" icon="telescope">
        Let's go!!
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})

export default MainPage
