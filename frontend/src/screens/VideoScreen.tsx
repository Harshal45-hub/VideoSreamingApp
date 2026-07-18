import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types/homeStack.types'
import { SafeAreaView } from 'react-native-safe-area-context'
import Video from 'react-native-video';
import { useEffect } from 'react'
import Orientation from 'react-native-orientation-locker'

type VideoProps = NativeStackScreenProps<HomeStackParamList, 'VideoScreen'>
const VideoScreen = ({ route }: VideoProps) => {

    const { item } = route.params

    useEffect(() => {
        Orientation.lockToLandscape();

        return () => {
            Orientation.lockToPortrait();
        };
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Video
                source={{ uri: item.uri }}
                style={styles.video}
                controls
                resizeMode="contain"
            />
        </SafeAreaView>

    )
}

export default VideoScreen

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})