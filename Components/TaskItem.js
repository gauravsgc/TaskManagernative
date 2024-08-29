import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './AppContext'; 
// const taskItem = ({task,setRefresh}) => {
  const taskItem = ({task}) => {
  const navigation=useNavigation();
  // onPress
  const {  handleRefresh } = useContext(AppContext);
    const updateTask=()=>{
        console.log(task);
// navigation.navigate('Update');
//pass the date using :--
navigation.navigate('Update',{
  task:task,
  // setRefresh
})

      //  onPress();
       //navigate to another page where u will get form
       //data inside that then button update will come
        
    }
    const deleteTask=()=>{
        // console.log("click");
        
        fetch(`http://192.168.137.141:3000/tasks/${task.id}`,{
            method:'DELETE',
            header:{
              "content-Type":"application/json"
            },
            body:JSON.stringify(task)
          }).then(()=>{
            // setRefresh(true);
            handleRefresh(true);
           
            console.log('task delete');
            
          })
    }
  return (
   <View style={styles.taskItem} >
    {/* {edit?<View><Text>navigate to update page</Text></View>:
    <>
    <View style={styles.taskItem}>
    <View >
        <Text style={styles.task}>
   {task.title}
   
   </Text>
   <Text>{task.discription}</Text>
   </View>
  
   <View style={styles.icons}>
   <AntDesign name="edit" size={24} color="black" onPress={updateTask} />
   <AntDesign name="delete" size={24} color="black" onPress={deleteTask} />
   </View> 
   </View>
   </>
   } */}
     <View > 
    
 <Text style={styles.task}>
   {task.title}
   
   </Text>
   <Text>{task.discription}</Text>
   <Text>{task.status}</Text>
   </View>
  
   <View style={styles.icons}>
   <AntDesign name="edit" size={24} color="black" onPress={updateTask} />
   <AntDesign name="delete" size={24} color="black" onPress={deleteTask} />
   </View>
   

 

   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  task:{
    
// backgroundColor:'red',
  },
  icons:{
    display:'flex',
flexDirection:'row',
justifyContent:'space-around',
    // backgroundColor:'yellow',
    width:'30%',
  },
  taskItem:{
    flex:1,
    flexDirection:'row' ,
    justifyContent:'space-around',
    
    margin:8,
    borderRadius:6,
    backgroundColor:'#f5f5dc',
    padding:8,
    
  },tasktext:{
color:'white'
  }
});

export default taskItem;