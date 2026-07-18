import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../../types/homeStack.types'
import LinearGradient from 'react-native-linear-gradient'
import { heightToDP, widthToDP } from 'react-native-responsive-screens'
import Icon from 'react-native-vector-icons/MaterialIcons'



type MovieProps = NativeStackScreenProps<HomeStackParamList, 'MovieCard'>

const MovieCard = ({ route, navigation }: MovieProps) => {

    const { item } = route.params

    return (
        <LinearGradient
            colors={['#0f0f0f', '#000011', '#000000']}   // dark gradient shades
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
        >
           <View style={styles.posterImageContainer}>
             <Image source={{uri:item.posterImage}}  style={styles.posterImage}/> 
             <TouchableOpacity onPress={() => navigation.navigate('VideoScreen',{item})}>
                <Icon name='play-circle-outline' size={60} color={'#fff'} />
            </TouchableOpacity>
           </View>
           <View style={styles.movieInfo}>
            <View style={styles.dataBox}>
                <Text style={styles.key}>Name:   </Text>
                <Text style={styles.value}>{item.title}</Text>
            </View>
            <View style={styles.dataBox}>
                <Text style={styles.key}>Cast:   </Text>
                {
                    item.cast.map((actor,index) => (
                        <Text key={index} style={styles.value}>  •{actor}</Text>
                    ))
                }
            </View>
            <View style={styles.dataBox}>
                <Text style={styles.key}>Genre:   </Text>
                <Text style={styles.value}>{item.genre}</Text>
            </View>
            <View style={styles.descriptionBox}>
                <Text style={styles.key}>Description:   </Text>
                <Text style={styles.value}>{item.description}</Text>
            </View>
           </View>

        </LinearGradient>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    posterImageContainer:{
        width:widthToDP('100%'),
        height:heightToDP('50%'),
        alignItems:'center',
        justifyContent:'center'
    },
    posterImage:{
        width:'100%',
        height:'100%',
        position:'absolute'
    },
    movieInfo:{
        width:widthToDP('100%'),
        height:heightToDP('40%'),
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center'
    },
    dataBox:{
        width:'90%',
        height:'20%',
        // backgroundColor:'red',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    descriptionBox:{
        width:'90%',
        height:'25%',
        alignSelf:'center',
    },
    key:{
        fontSize:20,
        color:'#9400d3'
    },
    value:{
        fontSize:20,
        color:'#ffffff'
    }
})