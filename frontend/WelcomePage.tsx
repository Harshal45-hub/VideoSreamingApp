import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'


const WelcomePage = ({navigation}:any) => {
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000001' }}>
            <Image source={{ uri: 'https://i.postimg.cc/WzWT6SCq/Chat-GPT-Image-Jul-6-2026-11-34-16-PM.png' }} style={styles.backGroundImage} />
            <Image source={{ uri: 'https://i.postimg.cc/gk1PzwWh/Chat-GPT-Image-Jul-6-2026-11-06-38-PM.png' }} style={styles.logoImage} />
            <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'transparent']}
                style={styles.mainTextContainer}>
                <Text style={styles.mainText}>Stories that</Text>
                <Text style={styles.mainText}>stay with you</Text>
                <View style={styles.submainTextContainer}>
                    <Text style={styles.submainText}>Unlimited movies, TV shows</Text>
                    <Text style={styles.submainText}>and exclusive originals</Text>
                </View>
                <TouchableOpacity style={styles.getStartesBtn} 
                onPress={() => navigation.navigate('SignUp') }
                >
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.signInText}>Sign in</Text>
                </TouchableOpacity>

                <Text style={styles.belowsignInText}>Explore.Watch.Repeat</Text>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    backGroundImage: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover',
        shadowOpacity: 0.1,
        position: 'absolute',
        opacity: 0.28,
        zIndex: -1
    },
    logoImage: {
        alignSelf: 'center',
        width: '40%',
        height: '40%',
        top: '20%',
    },
    mainTextContainer: {
        width: '100%',
        top: 0,
        height: 'auto',
        // backgroundColor: '#000001',
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 1
    },
    mainText: {
        color: '#fff8f8',
        fontSize: 32,
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 0.6
    },
    submainTextContainer: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 0.6
    },
    submainText: {
        color: '#ffffff',
    },
    getStartesBtn: {
        width: '80%',
        height: '15%',
        backgroundColor: '#3b218b',
        borderRadius: 10,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        zIndex: 1,
        marginBottom: '5%',
        shadowColor: '#3b218b',
        shadowRadius: 1,
        shadowOffset: { width: 10, height: 10 }
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ffffff',
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 0.6
    },
    signInText: {
        fontSize: 18,
        color: '#ffffff',
        textDecorationLine: 'underline'
    },
    belowsignInText:{
        fontSize: 18,
        color: '#ffffff',
        marginTop:'5%'
    }

})