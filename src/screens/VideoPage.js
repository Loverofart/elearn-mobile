import React from 'react'
import {View,StyleSheet,Image,StatusBar,Dimensions, Text} from 'react-native'
import { Video } from 'expo-av'
import Chapters from '../screens/Chapters'
import introvid from '../images/maintro.mp4'

const {width, height} = Dimensions.get("window");


export default class VideoPage extends React.Component{
    render(){
        return(
           <View style={style.container}>
               <StatusBar backgroundColor="#f58084"/>
               <Video
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                  }}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={style.video}
               />
               <Chapters
                    color="#fde6e6"
                    percent={25}
                    duration="2 hours, 20 minutes"
                    title="Introduction"
                    num={1}
               />

               <Text style={{
                   fontFamily:"Medium",
                   textAlign:"justify",
                   color:"#345c74",
                   paddingLeft:42,
                   paddingRight:35
               }}>
                   Энэ сургалт хэнд зориулагдсан бэ?
                    Мобайл аппыг андройд болон iOS утсанд зориулж мэргэжлийн түвшинд хөгжүүлж сурах 
                    хүсэлтэй оюутнаас эхлээд мэргэжлийн програмистууд хүртэлх бүх хүнд зориулагдсан.

                    Сургалтын онцлог
                    Бидний хийсвэр стартап болох Амазон номын дэлгүүрийн iOS болон андройд аппыг 
                    хөгжүүлэх байдлаар хийгдэх тул практикт суурилсан сонирхолтой хэлбэрээр явагдах юм. 
                    (Дашрамд хэлэхэд Rest API сургалт дээр Амазон номын дэлгүүрийн вэбийг React дээр, 
                    backend-ийг нь Express, MongoDB, Mongoose, NodeJS ашиглан бүтээсэн билээ)
               </Text>
               <View style={{
                   flexDirection:"row",
                   paddingVertical:5,
                   backgroundColor:"#f58084",
                   marginHorizontal:40,
                   paddingVertical:15,
                   alignItems:"center",
                   borderRadius:10,
                   justifyContent:"center",
                   marginTop:20
               }}>
                   <Text style={{
                       color:"#FFF",
                       fontFamily:"Bold",
                       fontSize:15,
                       marginRight:50
                   }}>
                       Read more
                   </Text>
                   <Image source={require('../images/a3.png')}/>
               </View>
           </View>
        )
    }
}
const style = StyleSheet.create({
    video:{
        width:width,
        height:height/3
    },
    container:{
        backgroundColor:"#fff",
        justifyContent:"center"
    }
})