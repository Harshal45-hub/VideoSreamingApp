import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, Alert} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { widthToDP, heightToDP, heightToFonts } from 'react-native-responsive-screens'
import { AuthContext } from '../contexts/AuthContext'
import { Video, videoResponse } from '../types/video.types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types/homeStack.types'


type HomeProps = NativeStackScreenProps<HomeStackParamList>

const Home = ({navigation}:HomeProps) => {

  const auth = useContext(AuthContext);

  if (!auth) return null;

  const { user } = auth;

  const [videos, setVideos] = useState<Video[]>([]);

  const addtoWatchList = async(videoId:string) => {

    try {
      const response = await fetch(`http://10.0.2.2:5000/api/v1/video/watchlist/${videoId}`,{
        method:'POST',
         headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({favourite:[videoId]})
      })

      if (!response.ok) {
        throw new Error('cannot be added to watchlist or already exist to watchlist');
      }

      const data = await response.json()
      JSON.stringify(data)

      Alert.alert('Added to watchlist')
    } catch (error) {
      Alert.alert(`Error occurred: ${error}`)
    }

  }

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch('http://10.0.2.2:5000/api/v1/video/')
        const data: videoResponse = await response.json()

        setVideos(data.videos)
        console.log(data.videos)
      } catch (error) {
        throw new Error("Error fetching videos:', error")
      }
    }
    getVideos()
  }, [])

  return (

    <LinearGradient
      colors={['#0f0f0f', '#000011', '#000000']}   // dark gradient shades
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>

        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.usernameText}>{user?.username}</Text>
        </View>

        <FlatList
          data={videos}
          keyExtractor={(item) => item._id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.heroContainer}>
              <Image source={{ uri: item.posterImage }} style={styles.posterImage} />
              <View style={styles.btnBox}>
                <TouchableOpacity
                onPress={() => navigation.navigate('MovieCard',{item})}
                style={styles.btn}>
                  <Text style={styles.btnText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn}
                onPress={() => {addtoWatchList(item._id)}}
                >
                  <Ionicons name="add" size={32} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

      </ScrollView >
    </LinearGradient>




  )
}

export default Home

const styles = StyleSheet.create({
  headerContainer: {
    width: widthToDP('95%'),
    height: heightToDP('10%'),
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: heightToFonts('2%'),
  },
  usernameText: {
    fontSize: heightToFonts('3.5%'),
    color: '#ffffff',
    fontWeight: 'bold'
  },
  heroContainer: {
    width: widthToDP('95%'),
    height: heightToDP('45%'),
    backgroundColor: 'rgba(255,255,255,0.01)',
    // backgroundColor:'red',
    margin: widthToDP('2.5%'),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ffffff'
  },
  posterImage: {
    width: '100%',
    height: '80%',
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  btnBox: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    width: '45%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(128, 0, 255, 0.9)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9400d3'
  },
  btnText: {
    fontSize: 24,
    color: '#ffffff'
  },
  addBtn: {
    width: '20%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d3d3d3'

  }
})