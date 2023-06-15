
import { View, Text, TextInput,TouchableOpacity,Alert } from 'react-native'
import {React, useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action';

export default function Login({navigation}) {

    const {error}= useSelector(state=>state.auth)

    const dispatch=useDispatch();


    const[email,setEmail]=useState();
    const[password,setPassword]=useState('');

const handleLogin=()=>{

    dispatch(login(email,password))
    // console.log("Login");
    // setEmail('');
    // setPassword('');
}
useEffect(()=>{
   if(error){
    Alert.alert(error)
    dispatch({type: "clearError"})
   }
    
    
},[error, dispatch,Alert])

  return (
    <View style={{backgroundColor:'#441bfa', flex:1}}>
        <View style={{alignSelf:'center', margin:10}}>
        <Icon name="calendar-outline" size={100} color="white"></Icon>
    </View>
    <View style={{alignSelf:'center', margin:10}}>
        <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>Plan My day</Text>
    </View>
    <View style={{margin:15}}>
    <TextInput placeholder='Email' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={email} onChangeText={setEmail}></TextInput>
    <TextInput placeholder='Password' style={{backgroundColor:'white', borderRadius:10, padding:10,margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={password} secureTextEntry={true} onChangeText={setPassword}></TextInput>
    <TouchableOpacity style={{backgroundColor:"white", alignSelf:'center', alignItems:'center', color:'white',padding:8, margin:2, borderRadius:5, margin:10}} onPress={handleLogin} disabled={!email || !password}>
        <Text style={{color:'#441bfa', fontWeight:'bold'}}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center', margin:15}} onPress={()=>navigation.navigate("register")} >
        <Text style={{color:'white', fontWeight:'bold', textDecorationStyle:'solid',textDecorationLine:'underline'}}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.navigate("forgotPassword")}>
        <Text style={{color:'white', fontWeight:'bold', textDecorationStyle:'solid',textDecorationLine:'underline'}}>Forgot Password</Text>
    </TouchableOpacity>
    </View>
        </View>
    
  )
}