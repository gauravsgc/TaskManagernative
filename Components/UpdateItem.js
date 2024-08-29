import React, { useEffect, useState,useContext } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './AppContext'; 
const UpdateItem = ({route}) => {
const [state,setState]=useState({});
const {  handleRefresh } = useContext(AppContext);
  // const  task=route.params;
  // console.log('upadte page',task);
  //called at mounting:--
  const navigation=useNavigation();
  useEffect(()=>{
if(route.params?.task){
  // console.log('upadte page...',route.params);
  setState(route.params.task);
}
  },[])
  const handlechange = (key,value) => {
    // console.log(key);
    // console.log(value);
    
    
    // state[key]=value;
    // setState(state);
// const {name,value}=e.target;
setState({...state,[key]:value})
  }

  
  const updateHandler=()=>{
   console.log(state);
  //  console.log(`http://192.168.137.141:3000/tasks/${state.id}`);
   
   fetch(`http://192.168.137.141:3000/tasks/${state.id}`,{
    method:'PUT',
    header:{
      "content-Type":"application/json"
    },
    body:JSON.stringify(state)
  }).then(()=>{
  //  route.params.setRefresh(true);
    console.log(route.params.setRefresh);
    handleRefresh(true);
    // setRefresh(true);
    console.log('new task updated');
    navigation.navigate('Home');
    
  }).catch(err=>{
    console.log(err);
    
  })
   
    
  }
  return (
    <View style={styles.inputContainer}>
      {/* <Text>{state.id}</Text> */}
      <TextInput placeholder='Title of the task' style={styles.textInput} value={state.title}  readOnly></TextInput>
     <TextInput placeholder='Discription of the task' style={styles.textInput} value={state.discription}  readOnly></TextInput>
     <TextInput placeholder='status of the task' style={styles.textInput} value={state.status}  onChangeText={(text)=>handlechange('status',text)} ></TextInput>
     <Button title='update task' onPress={updateHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer:{
    //  flexDirection:'row' ,
     justifyContent:'space-between',
     paddingBottom:24,
    //  borderBottomWidth:1,
     margin:2,
     
  //    flex:1,
    },
    textInput:{
      borderWidth:1,
      borderColor:'#cccccc',
     marginTop:4,
      marginRight:8,
      padding:8
  
    }
});

export default UpdateItem;