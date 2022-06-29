import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import MainPage from '@pages/MainPage'

const App = () => (
  <PaperProvider>
    <MainPage />
  </PaperProvider>
)

export default App
