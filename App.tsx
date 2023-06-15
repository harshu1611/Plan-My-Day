
import { StyleSheet, Text, View } from 'react-native';
import Main from './Main';
import Constants from 'expo-constants';
import {Provider} from 'react-redux'
import store from './redux/store';

export default function App() {
  return <Provider store={store}>
 <Main/>
  </Provider> 
   
  
}

