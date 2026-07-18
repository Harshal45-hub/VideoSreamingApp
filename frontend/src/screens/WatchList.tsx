import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { heightToDP, widthToDP } from 'react-native-responsive-screens'
import { favourite, watchList, watchListResponse } from '../types/watchlist.types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { watchListStackParamList } from '../types/watchlistStack.types'

type watchListProps = NativeStackScreenProps<watchListStackParamList>
const WatchList = ({navigation}:watchListProps) => {

  const [watchList,setWatchList] = useState<watchList | null>(null)

  useEffect(() => {
    const getWatchList = async() => {
      const response = await fetch('http://10.0.2.2:5000/api/v1/video/watchlist')
      const data: watchListResponse = await response.json()

      JSON.stringify(data)
      setWatchList(data.watchList)
      console.log("Watchlist response:", data.watchList);
    }

    getWatchList()
  },[])

  return (
    <LinearGradient
    colors={['#0f0f0f', '#000011', '#000000']}   // dark gradient shades
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Watchlist</Text>
      </View>

      <ScrollView style={{paddingVertical:20,flex:1}}>
        {
        watchList && watchList?.favourite?.length > 0 ? (
          watchList.favourite.map((movie) => (
            <TouchableOpacity key={movie._id} style={styles.watchListContainer}
            onPress={() => navigation.navigate('MovieCard', {item:movie} )}
            >
              <Image source={{uri:movie.posterImage}} style={styles.posterImage}/>
              <View style={styles.movieNameContainer}>
                <Text style={styles.titleText}>{movie.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        ): (
          <View>
            <Text>Nothing is in your watchlist</Text>
          </View>
        )
      }
      </ScrollView>
      


    </LinearGradient>
  )
}

export default WatchList

const styles = StyleSheet.create({
  headingContainer:{
    width:widthToDP('90%'),
    height:heightToDP('10%'),
    // backgroundColor:'red',
    alignSelf:'center',
    justifyContent:'center'
  },
  headingText:{
    fontSize:28,
    color:'#ffffff',
    fontWeight:'bold'
  },
  watchListContainer: {
    width:widthToDP('90%'),
    height:heightToDP('12.5%'),
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'space-between',
    borderRadius:5,
    borderWidth:0.25,
    borderColor:'#ffffff',
    marginTop:'4%'
  },
  posterImage: {
    width:'40%',
    height:'100%',
    resizeMode:'cover'
  },
  movieNameContainer: {
    width:'60%',
    height:'100%',
    backgroundColor:'#000000',
    alignItems:'center',
    justifyContent:'center'
  },
  titleText: {
    fontSize:18,
    color:'#9400d3'
  }
})