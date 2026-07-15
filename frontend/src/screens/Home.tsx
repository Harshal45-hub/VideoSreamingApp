import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { widthToDP, heightToDP, heightToFonts } from 'react-native-responsive-screens'
import { AuthContext } from '../contexts/AuthContext'

const Feed = () => {

  const auth = useContext(AuthContext);

  if (!auth) return null;

  const { user } = auth;

  return (

    <LinearGradient
      colors={['#0f0f0f', '#1c1c1c', '#2a2a2a']}   // dark gradient shades
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexDirection: 'column', paddingVertical: 20 }}>

        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.usernameText}>{user?.username}</Text>
        </View>

      </ScrollView >
    </LinearGradient>




  )
}

export default Feed

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
  usernameText:{
    fontSize:heightToFonts('3.5%'),
    color:'#ffffff',
    fontWeight:'bold'
  }
})