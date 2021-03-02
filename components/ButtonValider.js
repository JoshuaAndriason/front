import React from 'react';
import {StyleSheet, TouchableOpacity,Text} from 'react-native';


export default function ButtonValider() {
  
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={()=>console.log('Click')} >
        <Text>Valider</Text>
      </TouchableOpacity>

    )};

const styles = StyleSheet.create({
 
    button: {
      alignItems: "center",
      backgroundColor: "#AADEC0",
      padding: 10,
      width: '40%'
     }
  
  });