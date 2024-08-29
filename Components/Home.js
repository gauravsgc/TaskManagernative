import React ,{ useState,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import TaskList from './TaskList';
import { AppContext } from './AppContext'; 
const Home = ({navigation}) => {
    // const [isRefresh,setIsRefersh]=useState(true);
    const { isRefreshC, handleRefresh } = useContext(AppContext);
    console.log('hello',isRefreshC);
    console.log(handleRefresh);
    
    
    // const pressHandler=()=>{
    //   console.log('presshandler called');
    //   navigation.navigate('Update');
      
      
    // }
  // const setRefresh=(status)=>{
  //   console.log(status);
    
  //  setIsRefersh(status);
  // }
  return (
    <View style={styles.container}>
     <Header />
     {/* setRefresh={setRefresh} */}
     <TaskList />
     {/* setRefresh={setRefresh} isRefresh={isRefresh} */}
     {/* onPress={pressHandler} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:'10%',
    paddingHorizontal:16,
  },
});

export default Home;