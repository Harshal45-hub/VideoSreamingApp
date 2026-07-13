import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Keyboard, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/FontAwesome'



const SignUp = ({navigation}:any) => {

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  const handleLogin = async(email:string,password:string) => {
    try {
      const response = await fetch('http://10.0.2.2:5000/api/v1/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({email:email, password:password})
      })

      if(!response.ok){
        throw new Error('Invalid credentials');
      }

      const data = await response.json()
      console.log('Response JSON:', data);
      JSON.stringify(data)
      Alert.alert(`Login Successful username:${data.user.username}`)
      setIsLoggedIn(true)

      navigation.navigate('Feed',{username:data.user.name});
    } catch (error) {
      Alert.alert(`error occurred ${error}`)
    }
  }

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000001' }}>
      <Image source={{ uri: 'https://i.postimg.cc/nz2XcYbS/Chat-GPT-Image-Jul-12-2026-08-12-18-PM.png' }} style={styles.image} />
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>Welcome Back</Text>
        <Text style={styles.subHeadingText}>sign in to continue to
          <Text style={styles.velora}> Velora</Text>
        </Text>
      </View>

      
        <LinearGradient
          colors={['rgba(255,255,255,0.03)', 'rgba(255,255,255,0.03)']}
          style={[styles.gradientBox, { top: isKeyboardVisible ? '10%' : '22.5%' }]}
        >
          <View style={styles.Container}>
            <Text style={styles.HeadingText}>Email or Phone</Text>
            <View style={styles.InputHolder}>
              <Icon name='mail-outline' size={30} color='#fff' style={{ marginLeft: '2%' }}></Icon>
              <TextInput placeholder='Enter your email' placeholderTextColor={'#ffffff'} 
              onChangeText={(email) => setEmail(email)}
              style={styles.inputText} 
              />
            </View>
          </View>
          <View style={styles.Container}>
            <Text style={styles.HeadingText}>Password</Text>
            <View style={styles.InputHolder}>
              <Icon name='lock-closed-outline' size={30} color='#fff' style={{ marginLeft: '2%' }}></Icon>
              <TextInput placeholder='Enter your password' placeholderTextColor={'#ffffff'} secureTextEntry={true}
              onChangeText={(password) => setPassword(password)} 
              style={styles.inputText} />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginBtn}
          onPress={() => {handleLogin(email,password)}}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.newContainer}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }}></View>
            <Text style={{ marginLeft: '2%', marginRight: '2%', color: '#666' }}>or continue with</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }}></View>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity><Ionicons name="google" size={40} color="#DB4437" /></TouchableOpacity>     // Google "G"
            <TouchableOpacity><Ionicons name="apple" size={40} color="#f7f4f4" /></TouchableOpacity>         // Apple logo
            <TouchableOpacity><Ionicons name="facebook" size={40} color="#4267B2" /></TouchableOpacity>   // Facebook "f"
          </View>

        </LinearGradient>
   


    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
    opacity: 0.85,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: -1
  },
  headingTextContainer: {
    width: '100%',
    height: '15%',
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  subHeadingText: {
    color: '#ffffff',
    fontSize: 17
  },
  velora: {
    fontSize: 17,
    color: '#9932cc',
    fontWeight: 'bold'
  },
  gradientBox: {
    width: '95%',
    height: '55%',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 0.15,
    borderColor: '#ffffff',
    shadowColor: '#ffffff',
    shadowRadius: 2,
    justifyContent: 'space-evenly',
  },
  Container: {
    width: '90%',
    height: '20%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  HeadingText: {
    color: '#ffffff',
    textShadowColor: '#ffffff',
    fontSize: 16,
    marginLeft: '2%'
  },
  InputHolder: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(255,255,255,0.1)', // frosted look
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputText: {
    fontSize: 18,
    marginLeft: '2%'
  },
  passwordContainer: {
    width: '90%',
    height: '20%',
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: 'blue',
    marginRight: '1%'
  },
  loginBtn: {
    width: '90%',
    height: '13%',
    backgroundColor: '#3b218b',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  newContainer: {
    width: '90%',
    height: '5%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconsContainer: {
    width: '95%',
    height: '15%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})