import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image 
                  source ={require('../images/10.png')}
                    style={{width:"100%",height:"50%"}}
                />
                <Text
                  style={{
                    fontSize:20,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    color: '#535353'
                 }}
                >ӨӨРИЙГӨӨ ХӨГЖҮҮЛЦГЭЭЕ</Text>

                <Text
                  style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:50,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                  Олон төрлийн сургалтуудаас сонгон худалдан авч, чөлөөт цагаа үр бүтээлтэй өнгөрүүлээрэй.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:2,
                    marginTop:30,
                    paddingHorizontal:5,
                    borderColor:'rgb(63, 73, 152)',
                    borderRadius:23,
                    paddingVertical:8
                }}>
                  
                  <TextInput 
                      placeholder="Имейл хаяг"
                      placeholderTextColor='rgb(63, 73, 152)'
                      style={{paddingHorizontal:10}}
                  />
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:5,
                    borderColor:'rgb(63, 73, 152)',
                    borderRadius:23,
                    paddingVertical:8
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Нууц үг"
                        placeholderTextColor='rgb(63, 73, 152)'
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:50,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:5,
                    borderColor:'rgb(63, 73, 152)',
                    borderRadius:23,
                    paddingVertical:8
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Нууц үг давтах"
                        placeholderTextColor='rgb(63, 73, 152)'
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    marginHorizontal:50,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:'rgb(241, 140, 142)',
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Бүртгүүлэх</Text>
                </View>
                <Text      
                  onPress={()=>navigate('Login')}
                  style={{
                    alignSelf:"center",
                    color:'rgb(63, 73, 152)',
                    fontFamily:"SemiBold",
                    paddingVertical:15,
                    marginTop: 10,
                    textDecorationLine: 'underline'
                  }}
                >Нэвтрэх
                </Text>

                <Text      
                  onPress={()=>navigate('Home')}
                  style={{
                    alignSelf:"center",
                    color:'#333',
                    fontFamily:"SemiBold",
                    fontSize: 20,
                    marginTop: 0,
                    paddingVertical:25
                  }}
                >X
                </Text>
            </View>
        )
    }
}