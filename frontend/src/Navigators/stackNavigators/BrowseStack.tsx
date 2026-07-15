import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Browse from '../../screens/Browse'


const BrowseStack = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Browse'>
      <Stack.Screen name='Browse' component={Browse} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default BrowseStack