import React, { useEffect, useState,useContext } from 'react';
import { View, Text, StyleSheet ,SafeAreaView,ScrollView, FlatList} from 'react-native';
import TaskItem from './TaskItem';
import { AppContext } from './AppContext'; 
// const TaskList = ({isRefresh,setRefresh}) => {
  const TaskList = () => {
  // onPress:prop
    const [task,setTask]=useState([]);
    const [loading, setLoading] = useState(true);
    const {  isRefreshC,handleRefresh } = useContext(AppContext);
    
    
    
    // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`http://192.168.137.141:3000/tasks`); // Replace with your API endpoint
      const result = await response.json();
      setTask(result);
      setLoading(false);
            // setRefresh(false);
            handleRefresh(false);
    } catch (error) {
      console.error(error);
             // setRefresh(false);
             handleRefresh(false);
    }
  };
useEffect(()=>{
    // console.log(`http://localhost:3000/tasks`);
    
    // if(isRefresh)
    if(isRefreshC)
      {
      fetchData();
    }
        },[isRefreshC,handleRefresh])//isRefresh,setRefresh
  return (
    <View>
      <Text> tasks:</Text>
      {/* <ScrollView >
   {task.map((info,index)=>
   <View  key={index}style={styles.taskItem}><Text 
   style={styles.tasktext} >{info.title}</Text>
   </View>)}
   
     </ScrollView> */}
     <FlatList data={task} renderItem={(element)=>{
      /*data looping done here*/
        return(
          <View>
            <Text>Filter by:</Text>
          <TaskItem task={element.item} key={element.id}  />
          </View>
          // setRefresh={setRefresh}
          // onPress={onPress}
  //           <View style={styles.taskItem}><Text 
  //  style={styles.tasktext} >{element.item.title} </Text>
  //  </View>
        )
     }} alwaysBounceVertical={false}>

     </FlatList>


    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    // flex: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
//   taskItem:{
//     margin:8,
//     borderRadius:6,
//     backgroundColor:'#5e06cc',
//     padding:8,
    
//   },tasktext:{
// color:'white'
//   }
});

export default TaskList;