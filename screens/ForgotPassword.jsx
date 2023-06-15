import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {forgotPassword, loadUser, verify } from '../redux/action'

export default function ForgotPassword({navigation}) {

   
  const [email,setEmail]= useState("")
    const dispatch=useDispatch();

    const forgotHandler = async() => {
      await dispatch(forgotPassword(email));
      navigation.navigate("resetPassword");
    }
  return (
    <View style={{backgroundColor:'#441bfa', flex:1,flexDirection:'column'}}>
   <View style={{alignItems:'center',marginTop:50}}>
    <Text style={{color:'white', fontSize:40}}>Forgot Password</Text>
   </View>
<View style={{marginTop: 200}}>
<TextInput placeholder='Enter Registered Email' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold' ,alignSelf:'center', width:300}} placeholderTextColor={"black"} value={email} onChangeText={setEmail}></TextInput>
<TouchableOpacity style={{backgroundColor:"white", alignSelf:'center', alignItems:'center', color:'white',padding:8, margin:2, borderRadius:5, margin:10}} onPress={forgotHandler}>
        <Text style={{color:'#441bfa', fontWeight:'bold'}}>Send OTP</Text>
    </TouchableOpacity>
   
</View>


        </View>
    
  )
}
  