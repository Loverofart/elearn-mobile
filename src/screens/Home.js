import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'
import CourseList from '../screens/CourseList'

export default class Home extends React.Component{
    render(){
        return(
           <ImageBackground
            source={require('../images/Home.png')}
            style={{width:"100%",height:"100%"}}
           >
                <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                       <View style={{
                           paddingHorizontal:10,
                           paddingVertical:12,
                           borderRadius:10,
                           marginTop:50,
                           backgroundColor:"#d1a0a7"
                       }}>
                           <Image
                            source={require('../images/hum.png')}
                            style={{height:15,width:20}}
                           />
                       </View>
                   </View>
                   <Text style={{
                       paddingHorizontal:20,
                       marginRight: 20,
                       fontSize:25,
                       paddingTop:40,
                       fontFamily:"Bold",
                       color:"#FFF"
                   }}>
                       Шинэ зүйл сурахдаа бэлэн үү?
                   </Text>

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       backgroundColor:"#FFF",
                       padding:10,
                       borderRadius:12,
                       marginHorizontal:20,
                       marginTop:20
                   }}>
                       <TextInput
                            placeholder="Ямар хичээл сурмаар байна?"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily:"Bold",
                                fontSize:12,
                                width:320,
                                paddingHorizontal:12
                            }}
                       />
                       <Image
                            source={require('../images/sear.png')}
                            style={{height:14,width:14}}
                       />
                   </View>
                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:15,
                       marginHorizontal:20,
                       borderRadius:20,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:20,
                               fontFamily:"Bold",
                               width:250,
                               paddingRight:100 
                           }}>
                               Хичээлүүд
                           </Text>
                           <TouchableOpacity
                                onPress={()=>this.props.navigation.navigate('Cources')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:120,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontFamily:"Bold",
                                        fontSize:12
                                    }}>Цааш үзэх</Text>  
                                    <Image
                                        source={require('../images/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../images/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>
                   <Text style={{
                       color:"#345c74",
                       fontFamily:"Bold",
                       fontSize:20,
                       paddingHorizontal:20,
                       marginTop:50,
                       marginBottom:10
                   }}>Үзэж буй хичээлүүд</Text>

                   <CourseList
                        onPress={()=>this.props.navigation.navigate("Xd")}
                        img={require('../images/xd.png')}
                        title="Adobe XD дээр прототайп гаргах"
                        bg="#fdddf3"
                   />
                    <CourseList
                        img={require('../images/sketch.png')}
                        title="Sketch програм дээр ажиллах"
                        bg="#fef8e3"
                   />
                    <CourseList
                        img={require('../images/ae.png')}
                        title="After Effects сурцгаая"
                        bg="#fcf2ff"
                   />
               </ScrollView>
           </ImageBackground>
        )
    }
}