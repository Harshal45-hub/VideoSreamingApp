import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home'
import MovieCard from '../../components/homePageComponents/MovieCard'
import VideoScreen from '../../screens/VideoScreen'


const HomeStack = () => {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='MovieCard' component={MovieCard} options={{ headerShown: false, presentation:'card'}}/>
      <Stack.Screen name='VideoScreen' component={VideoScreen} options={{ headerShown: false, presentation:'card'}} />
    </Stack.Navigator>
  )
}

export default HomeStack