import { View, Text, TouchableOpacity} from 'react-native'
import {React,useState} from 'react'
import {Checkbox} from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { deleteTask, loadUser, updateTask } from '../redux/action'



const Task=({title,description, status, taskId})=> {

    const dispatch= useDispatch();
    const [completed,setCompleted]=useState(status)
    const handleCheckBox=()=>{
      // console.log(taskId)
      setCompleted(!completed)
       dispatch(updateTask(taskId));
        
        
    }

    const handleDelete=async()=>{
      
     await dispatch(deleteTask(taskId));
        dispatch(loadUser());
    }
  return (
    <View style={{padding:10, alignItems:'center', justifyContent:'space-evenly',flexDirection:'row', backgroundColor:'#9941e0', borderRadius:15,margin:4}}>
        <View>
        <Text style={{fontSize:20, marginVertical:10, color:'white', fontWeight:'bold'}}>{title}</Text>
      <Text style={{color: 'white', fontWeight:'bold'}}>{description}</Text>

      
        </View>
        <Checkbox status={completed?"checked":"unchecked" } onPress={handleCheckBox} color='white'></Checkbox>
        <TouchableOpacity onPress={handleDelete}>
        <Icon name="delete" color="white" backgroundColor="red" size={25}></Icon>
        </TouchableOpacity>
        
       
    </View>
  )
}

export default Task;