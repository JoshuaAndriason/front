import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function ChatScreen(props) {
 

  return (
   
    <View style={styles.container}>
    
   
 <Text>CHAT SCREEN</Text>
</View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    padding: 10,
    width: '40%' }

});

 


