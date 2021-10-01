import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, Alert } from 'react-native';

export default function App() {
  console.log("everything here");
  const name= "rohit";
  const aaja=()=>{
    return "aaja clicked";
  }
  return (
      <SafeAreaView style={styles.container}>
        <Button title="Click me" onPress={()=>Alert.alert("Title","Message",[{text:"yes",onPress:()=>console.log(aaja()) },{text:"no",onPress:()=> console.log("no")}])}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
