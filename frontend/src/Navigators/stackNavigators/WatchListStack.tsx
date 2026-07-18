import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WatchList from '../../screens/WatchList'
import VideoScreen from '../../screens/VideoScreen'
import MovieCard from '../../components/homePageComponents/MovieCard'


const WatchListStack = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='WatchList'>
      <Stack.Screen name='WatchList' component={WatchList} options={{headerShown:false}}/>
      <Stack.Screen name='MovieCard' component={MovieCard} options={{headerShown:false}}/>
      <Stack.Screen name='VideoScreen' component={VideoScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default WatchListStack