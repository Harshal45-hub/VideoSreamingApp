import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from '../contexts/AuthProvider'
import AuthStack from './stackNavigators/AuthStack'
import MainTabNavigation from './TabNavigators/MainTabNavigation'


const AppNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
    
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AuthStack'>
                <Stack.Screen name='AuthStack' component={AuthStack} options={{headerShown:false}}/>
                <Stack.Screen name='MainTabNavigation' component={MainTabNavigation} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    
  )
}

export default AppNavigator

const styles = StyleSheet.create({})