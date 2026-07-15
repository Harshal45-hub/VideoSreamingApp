import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './frontend/WelcomePage'
import AppNavigator from './frontend/src/Navigators/AppNavigator'
import AuthProvider from './frontend/src/contexts/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  )
}

export default App