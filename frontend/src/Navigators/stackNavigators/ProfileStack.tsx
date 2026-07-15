import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/Profile'


const ProfileStack = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default ProfileStack