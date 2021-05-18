import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/10.png')}
                    style={{width:"100%",height:"50%"}}/>

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
                    paddingHorizontal:10,
                    borderColor:'rgb(63, 73, 152)',
                    borderRadius:23,
                    paddingVertical:6
                }}>
                    <Icon name="mail" color='rgb(63, 73, 152)' size={24}/>
                    <TextInput 
                        secureTextEntry
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
                    paddingHorizontal:10,
                    borderColor:'rgb(63, 73, 152)',
                    borderRadius:23,
                    paddingVertical:6
                }}>
                    <Icon name="key" color='rgb(63, 73, 152)' size={24}/>
                    <TextInput 
                        secureTextEntry
                        placeholder="Нууц үг"
                        placeholderTextColor='rgb(63, 73, 152)'
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                
                {/* Нэвтрэх */}
                <View style={{
                    marginHorizontal:50,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:20,
                    backgroundColor:'rgb(241, 140, 142)',
                    paddingVertical:11,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Нэвтрэх</Text>
                </View>
                
                {/* Бүртгүүлэх */}
                <Text      
                  onPress={()=>navigate('Register')}
                  style={{
                    alignSelf:"center",
                    color:'rgb(63, 73, 152)',
                    fontFamily:"SemiBold",
                    paddingVertical:25,
                    textDecorationLine: 'underline'
                  }}
                >Бүртгүүлэх
                </Text>
                
                {/* Нууц үг матрсан */}
                <Text      
                  onPress={()=>navigate('ForgotPassword')}
                  style={{
                    alignSelf:"center",
                    color:'rgb(63, 73, 152)',
                    fontFamily:"SemiBold",
                  }}
                >Нууц үгээ мартсан уу?
                </Text>

                <Text      
                  onPress={()=>navigate('Home')}
                  style={{
                    alignSelf:"center",
                    color:'#333',
                    fontFamily:"SemiBold",
                    fontSize: 20,
                    marginTop: 18,
                    paddingVertical:25
                  }}
                >X
                </Text>
            </View>
        )
    }
}