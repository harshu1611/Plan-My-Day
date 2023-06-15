import { View, Text, TextInput,TouchableOpacity, Alert} from 'react-native'
import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../redux/action';

export default function ResetPassword({navigation}) {

    const{message,error}=useSelector(state=>state.message);
    const [otp,setOtp]= useState('');
    const[newPassword,setNewPassword]= useState('');
    const dispatch=useDispatch()

    const changePasswordHandler=async()=>{
        await dispatch(resetPassword(otp,newPassword));
        navigation.navigate("login");
    }
    useEffect(() => {
      if(message){
        Alert.alert(message);
        dispatch({type:"clearMessage"});
      }
      if(error){
        Alert.alert(error);
        dispatch({type:"clearError"});
      }
    
    }, [alert,message,error, dispatch])
    
    return (
        <View style={{backgroundColor:'#441bfa', flex:1}}>
            <Text style={{color:'white', fontSize: 40, alignSelf:'center', marginTop:40}}>Reset Password</Text>
        <View style={{marginTop:210}}>
        <TextInput placeholder='Enter OTP' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={otp} onChangeText={setOtp} keyboardType='number-pad'></TextInput>
        <TextInput placeholder='New Password' style={{backgroundColor:'white', borderRadius:10, padding:10,margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={newPassword} onChangeText={setNewPassword} secureTextEntry={true}></TextInput>
        <TouchableOpacity style={{backgroundColor:"white", alignSelf:'center', alignItems:'center', color:'white',padding:8, margin:2, borderRadius:5, margin:10}} onPress={changePasswordHandler} disabled={!otp || !newPassword}>
            <Text style={{color:'#441bfa', fontWeight:'bold'}}>Reset Password</Text>
        </TouchableOpacity>
        
        </View>
            </View>
        
      )
}