import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { AppContext } from './AppContext';
// const Header = ({setRefresh}) => {
  const Header = () => {
  const [task,setTask]=useState("");
  const [discription,setDiscription]=useState("");
  const {  handleRefresh } = useContext(AppContext);
  const goalInputHandler1=(enterdText)=>{
    console.log(enterdText);
    setTask(enterdText);
  }
  const goalInputHandler2=(enterdText)=>{
    // console.log(enterdText);
    setDiscription(enterdText);
  }
  const addHandler=()=>{
    if(task!=''&& discription!=''){
      
      
      const newTask={id:`${Date.now()}`,title:task,discription,status:'pending','createdAt':new Date().toLocaleTimeString(),'updatedAt':new Date().toLocaleTimeString()}
      console.log(newTask);

      fetch(`http://192.168.137.141:3000/tasks`,{
        method:'POST',
        header:{
          "content-Type":"application/json"
        },
        body:JSON.stringify(newTask)
      }).then(()=>{
        alert('new Task added succesfully');
        setTask("");
        setDiscription("");
        // setRefresh(true);
       handleRefresh(true);
        console.log('new task added');
        
      })

    }
    
    
    
    
    // alert("click is pressed");
  }
  return (
    <View style={styles.inputContainer}>
     <TextInput placeholder='Title of the task' style={styles.textInput} onChangeText={goalInputHandler1} value={task} ></TextInput>
     <TextInput placeholder='Discription of the task' style={styles.textInput} onChangeText={goalInputHandler2} value={discription} ></TextInput>
     <Button title='Add task' onPress={addHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'green',
    
//     // alignItems: 'center',
//   },
  inputContainer:{
  //  flexDirection:'row' ,
   justifyContent:'space-between',
   paddingBottom:24,
   borderBottomWidth:1,
   borderBottomColor:"#cccccc",
  
//    flex:1,
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
   marginTop:2,
    marginRight:8,
    padding:8

  }

});

export default Header;