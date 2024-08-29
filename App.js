import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import UpdateItem from './Components/UpdateItem';
import { AppProvider } from './Components/AppContext'; 
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AppProvider> 
    <View style={styles.container}>
      {/* <Text>Task Manager App</Text> */}
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title:'Tasks'}} />
        <Stack.Screen name="Update" component={UpdateItem} options={{title:'Update Task'}} />
      </Stack.Navigator>
      </NavigationContainer>
      
      <StatusBar style="auto" />
    </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:'10%',
    paddingHorizontal:16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
