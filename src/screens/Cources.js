import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import {Modalize} from 'react-native-modalize'
import CourseList from '../screens/CourseList'

export default class Cources extends React.Component{
    render(){
        return(
            <ImageBackground
                source={require('../images/cat.png')}
                style={{width:"100%",height:"100%"}}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20,
                    marginTop:30
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#8bbcdb"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{width:20,height:15}}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#8bbcdb",
                        marginLeft:290
                    }}> 
                            <Image
                                source={require('../images/hum.png')}
                                style={{height:15,width:20}}
                            />
                    </View>
                </View>
                <Text style={{
                    color:"#FFF",
                    fontSize:35,
                    fontFamily:"Bold",
                    width:220,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:36
                    
                    }}>
                    UI/UX сургалтууд
                </Text>

                <Modalize
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={500}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >
                    <View style={{marginTop:40}}>
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
                             <CourseList
                                img={require('../images/f.png')}
                                title="Figma ашиглаж сурцгаая"
                                bg="#fff0ee"
                            />
                             <CourseList
                                img={require('../images/ps.png')}
                                title="Adobe Photoshop сурцгаая"
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
                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}