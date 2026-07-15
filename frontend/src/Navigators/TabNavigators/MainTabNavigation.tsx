import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStack from '../stackNavigators/HomeStack'
import BrowseStack from '../stackNavigators/BrowseStack'
import WatchListStack from '../stackNavigators/WatchListStack'
import ProfileStack from '../stackNavigators/ProfileStack'

const MainTabNavigation = () => {

    const BottomTab = createBottomTabNavigator()

  return (
     <BottomTab.Navigator initialRouteName='Home' screenOptions={{tabBarStyle: {backgroundColor:'#000000'}, tabBarActiveTintColor:'#9400d3', tabBarInactiveTintColor:'#ffffff'}}>
        <BottomTab.Screen  name='Home' component={HomeStack} options={{headerShown:false, tabBarIcon:({focused}) => {
            return <Ionicons name='home-outline' size={28} color={focused? '#9400d3': '#ffffff'}></Ionicons>
        }}}/>
        <BottomTab.Screen  name='Browse' component={BrowseStack} options={{headerShown:false, tabBarIcon:({focused}) => {
            return <Ionicons name='search-outline' size={28} color={focused? '#9400d3': '#ffffff'}></Ionicons>
        }}}/>
        <BottomTab.Screen  name='WatchList' component={WatchListStack} options={{headerShown:false, tabBarIcon:({focused}) => {
            return <Ionicons name='bookmark-outline' size={28} color={focused? '#9400d3': '#ffffff'}></Ionicons>
        }}}/>
        <BottomTab.Screen  name='Profile' component={ProfileStack} options={{headerShown:false, tabBarIcon:({focused}) => {
            return <Ionicons name='person-outline' size={28} color={focused? '#9400d3': '#ffffff'}></Ionicons>
        }}}/>
     </BottomTab.Navigator>
     
  )
}

export default MainTabNavigation