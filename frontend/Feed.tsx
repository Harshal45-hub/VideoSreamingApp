import { View, Text } from 'react-native'
import React from 'react'

const Feed = ({route}:any) => {
    const {username} = route.params()
  return (
    <View>
      <Text>Feed</Text>
    </View>
  )
}

export default Feed