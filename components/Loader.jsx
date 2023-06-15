import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

export default function Loader() {
  return (
    <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator animating={true} size={100} color='#441bfa'/>
    </View>
  )
}