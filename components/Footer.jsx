import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import{useNavigation} from '@react-navigation/native'

export default function Footer() {
    const navigation=useNavigation();
  return (
    <View style={{margin:10,pading:40, backgroundColor:'white', flexDirection:"row", justifyContent:'space-around'}}>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Icon name="home" size={30} color="#441bfa"/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("profile")}>
        <Icon name="user" size={30} color="#441bfa"/>
    </TouchableOpacity>


    </View>
  )
}