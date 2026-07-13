import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomePage from './WelcomePage'
import SignUp from './SignUp'
import Feed from './Feed'

const AuthStack = () => {

    const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomePage'>
            <Stack.Screen name='WelcomePage' component={WelcomePage} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
            <Stack.Screen name='Feed' component={Feed} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack