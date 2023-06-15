
import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import {React, useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {Avatar} from'react-native-paper'
import { useDispatch } from 'react-redux'
import { register } from '../redux/action'
import mime from 'mime'

export default function Login({navigation,route}) {

    const dispatch=useDispatch();

    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState('');
    const[avatar,setAvatar]=useState("")
const handleImage=()=>{
    navigation.navigate("camera");
}


const handleSignUp=async ()=>{
    const myForm= new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("avatar", {
      uri:avatar,
      type:mime.getType(avatar),
      name: avatar.split("/").pop()
    })
  await dispatch(register(myForm));
       
    
}
useEffect(()=>{
    if(route.params){
        if(route.params.image){
            setAvatar(route.params.image)
        }
    }
},[route])
  return (
    <View style={{backgroundColor:'#441bfa', flex:1}}>
    <View style={{alignSelf:'center', alignItems:'center', margin:15}}>
    <Avatar.Image size={150} source={{uri: avatar ? avatar :null}} style={{backgroundColor:'white'}}></Avatar.Image>
    <TouchableOpacity onPress={handleImage}>
        <Text style={{color:'white'}}>Change Photo</Text>
    </TouchableOpacity>
    </View>
   
<View>
<TextInput placeholder='Name' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={name} onChangeText={setName}></TextInput>
<TextInput placeholder='Email' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={email} onChangeText={setEmail}></TextInput>
<TextInput placeholder='Password' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5,fontWeight:'bold'}} placeholderTextColor={"black"} value={password} secureTextEntry={true} onChangeText={setPassword}></TextInput>
<TouchableOpacity style={{backgroundColor:"white", alignSelf:'center', alignItems:'center', color:'white',padding:8, margin:2, borderRadius:5, margin:10}} onPress={handleSignUp} disabled={!email || !password || !name}>
        <Text style={{color:'#441bfa', fontWeight:'bold'}}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center', margin:15}} onPress={()=>navigation.navigate("login")} >
        <Text style={{color:'white', fontWeight:'bold', textDecorationStyle:'solid',textDecorationLine:'underline'}}>Have an Account, Log In</Text>
    </TouchableOpacity>
</View>


        </View>
    
  )
}