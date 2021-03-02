import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';


export default function ButtonVoir(props) {
  
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={()=>console.log('click')} >
        <Text>Voir</Text>
      </TouchableOpacity>

    )};

const styles = StyleSheet.create({
 
    button: {
      alignItems: "center",
      backgroundColor: "#AADEC0",
      padding: 10,
      width: '20%',
      borderRadius: 20
     }
  
  });