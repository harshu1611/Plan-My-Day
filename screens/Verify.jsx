import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import {React, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {loadUser, verify } from '../redux/action'

export default function Verify() {

    const[otp,setOtp]=useState()

    const dispatch=useDispatch();

    const verifyHandler = async () => {
        await dispatch(verify(otp));
        dispatch(loadUser())
    }
  return (
    <View style={{backgroundColor:'#441bfa', flex:1,flexDirection:'column'}}>
   
<View style={{marginTop: 200}}>
<TextInput placeholder='Enter OTP' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold' ,alignSelf:'center', width:200}} placeholderTextColor={"black"} value={otp} onChangeText={setOtp} keyboardType="number-pad"></TextInput>
<TouchableOpacity style={{backgroundColor:"white", alignSelf:'center', alignItems:'center', color:'white',padding:8, margin:2, borderRadius:5, margin:10}} onPress={verifyHandler}>
        <Text style={{color:'#441bfa', fontWeight:'bold'}}>Verify OTP</Text>
    </TouchableOpacity>
   
</View>


        </View>
    
  )
}
  