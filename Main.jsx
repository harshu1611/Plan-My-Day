import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';
import Login from './screens/Login';
import Footer from './components/Footer';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Camera from './screens/Camera';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/action';
import Loader from './components/Loader';
import ForgotPassword from './screens/ForgotPassword';
import Verify from './screens/Verify';
import ResetPassword from './screens/ResetPassword';

const Stack=createNativeStackNavigator();


export default function Main() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])


  const {isAuthenticated,loading}= useSelector(state=>state.auth)
  return (
    loading? <Loader/> :
    <NavigationContainer >
        <Stack.Navigator initialRouteName= {isAuthenticated? 'Home':'login'} options={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='profile' component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name='register' component={Register} options={{headerShown:false}}/>
            <Stack.Screen name='camera' component={Camera} options={{headerShown:false}}/>
            <Stack.Screen name='forgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
            <Stack.Screen name='verify' component={Verify} options={{headerShown:false}}/>
            <Stack.Screen name='resetPassword' component={ResetPassword} options={{headerShown:false}}/>
        </Stack.Navigator>
       {isAuthenticated && <Footer/>}
    </NavigationContainer>
  )
}