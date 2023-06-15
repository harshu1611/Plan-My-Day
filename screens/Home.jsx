import { View, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity, TextInput, ScrollView,Alert} from 'react-native'
import {React,useState,useEffect} from 'react'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/Entypo'
import {Dialog, Button} from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, loadUser } from '../redux/action'

export default function Home({navigation}) {
 const {user}=useSelector(state=>state.auth);

const dispatch=useDispatch();
const {loading,message,error}=useSelector(state=>state.message);

const [openDialog, setOpenDialog]= useState(false);
const [title, setTitle]= useState('');
const[description, setDescription]=useState('');
const hideDialog=()=>{
    setOpenDialog(!openDialog);
}
const addTaskHandler=async()=>{
    await dispatch(addTask(title,description))
    dispatch(loadUser());
    setTitle('');
    setDescription('')
}
useEffect(() => {
  if(error){
    Alert.alert(error);
    dispatch({type:"clearError"})
  }
  if(message){
    Alert.alert(message);
    dispatch({type:"clearMessage"})

  }

}, [Alert,error,message,dispatch])

  return (
    <>
    <View style={{backgroundColor:'white', flex:1, paddingTop: Platform.OS==="android"? StatusBar.currentHeight: 0}}>
     <ScrollView>
     <SafeAreaView>
            <Text style={{backgroundColor:'#441bfa', color:'white', fontSize:20, fontWeight:'bold', textAlign:'center'}}>My Tasks</Text>

    {user && user.tasks.map((item)=>(
        
                <Task key={item._id} title={item.title} description={item.description} status={item.completed} taskId={item._id}/>
    ))}

        <TouchableOpacity style={{backgroundColor:'white', width: 150, height: 50, alignSelf:"center", alignItems:'center', borderRadius:100, elevation:5, margin:10}} onPress={hideDialog}>
            <Icon name='add-to-list' size={40} color='#f01666' />
        </TouchableOpacity>


        </SafeAreaView>
     </ScrollView>
       
    
   </View>

   <Dialog visible={openDialog} onDismiss={()=>setOpenDialog(false)}>
   <Dialog.Title>Add A Task</Dialog.Title>
   <Dialog.Content>
    <TextInput placeholder='Title' style={{backgroundColor:'white', borderRadius:10, padding:10, margin:5}} placeholderTextColor={"black"} value={title} onChangeText={setTitle}></TextInput>
    <TextInput placeholder='Description' style={{backgroundColor:'white', borderRadius:10, padding:10,margin:5}} placeholderTextColor={"black"} value={description} onChangeText={setDescription}></TextInput>
    <TouchableOpacity style={{backgroundColor:"#441bfa", alignSelf:'center', alignItems:'center', color:'white',padding:4, margin:2, borderRadius:5}} onPress={addTaskHandler}>
        <Text style={{color:'white', fontWeight:'bold'}}>Add Task</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>setOpenDialog(false)}>
        <Text>Cancel</Text>
    </TouchableOpacity>
   </Dialog.Content>
   </Dialog>
   </>
  )
}