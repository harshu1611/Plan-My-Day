import { View, Text, TouchableOpacity,Alert } from 'react-native'
import {React, useState,useEffect} from 'react'
import {Camera,CameraType} from 'expo-camera'
import Icon from'react-native-vector-icons/MaterialIcons'
import * as ImagePicker from 'expo-image-picker';

const CameraPage = ({navigation}) => {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission]= useState(null);
  const [camera, setCamera] = useState(null);


  useEffect(()=>{
    (async()=>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status==='granted')
    })();
  },[])
  const openImagePicker=async()=>{
    const permissionResult=await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(permissionResult.granted===false){
      Alert("Permission to gallery is Required");
      return;
    }
    const data=await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      aspect:[1,1],
      quality:1
    });

    return navigation.navigate("register",{image: data.uri})

  }
  const clickPicture=async()=>{
    const data=await camera.takePictureAsync();

    return navigation.navigate("register",{image:data.uri})
  }
  if(hasPermission===null){
    return <View/>
  }
  if(hasPermission===false){
    return <Text>No Access To Camera</Text>
  }
  return (
    <View style={{flex:1}} >
      <Camera type={type} style={{flex:1,aspectRatio:1}} ratio="1:1" ref={(e)=>{setCamera(e)}}/>
        <View style={{flexDirection:'row', position:'absolute', bottom: 10, justifyContent:'space-evenly', width: '100%'}}>
         <Icon name="image" size={40} color='white' onPress={openImagePicker}></Icon>
         <Icon name="camera" size={40} color='white' onPress={clickPicture}></Icon>
         <Icon name="flip-camera-android" size={40} color='white' onPress={()=>{
          setType(type===CameraType.back?CameraType.front:CameraType.back)
         }}></Icon>
        </View>
      
    </View>
  );
}

export default CameraPage