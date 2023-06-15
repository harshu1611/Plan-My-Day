import { View, Text,TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import { Avatar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action';


export default function Profile({navigation}) {
 
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.auth)
  const [name,setName]=useState(user.name);
  const [email,setEmail]=useState(user.email);
  const [avatar,setAvatar]= useState(user.avatar.url)
  const[verified,setVerified]=useState(user.verified)

const logoutHandler=()=>{
  dispatch(logout());
}

  return (
    <View style={{flex:1, backgroundColor:'white',alignItems:'center'}}>
     
     <Avatar.Image size={150} source={{uri: avatar? avatar : null}} style={{backgroundColor:'#441bfa',margin:10}}/>
     <Text style={{color:'#441bfa', fontSize:25, fontWeight:'bold',marginTop:50}}>Name : {name}</Text>
     <Text style={{color:'#441bfa', fontSize:20, fontWeight:'bold'}}>E-mail: {email}</Text>
     <Text style={{color:'#441bfa', fontSize:20, fontWeight:'bold'}}>Verification: {verified? <Text style={{color:'#2ff50c'}}> Verified</Text>: <Text style={{color:'#e8120e'}}> Not Verified</Text>}</Text>
     
     {user.verified? null:
     <>
     <Text style={{color:'#e8120e'}}>Verify OTP Or User Will Be Deleted In 12 Hours</Text>
     <TouchableOpacity style={{marginTop:100}} onPress={()=>navigation.navigate("verify")}>
    <Text style={{color:'#441bfa', fontWeight:'bold'}}>VERIFY OTP</Text>
    </TouchableOpacity>
     </>
     }
      <TouchableOpacity style={{marginTop:100}} onPress={logoutHandler}>
       <Text style={{color:'#441bfa', fontWeight:'bold'}}>LOG OUT</Text>

       </TouchableOpacity>
    </View>
  )
}