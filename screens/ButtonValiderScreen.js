import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';


export default function ButtonValiderScreen(props) {
  
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={()=>console.log(email, name, room)} >
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