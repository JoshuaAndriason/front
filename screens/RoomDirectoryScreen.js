import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function RoomDirectoryScreen(props) {
    return(
        <View style={styles.container}>
      
 <Text>room Directory SCREEN</Text>
    </View>

    )};

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          flexDirection: 'column',
          textAlign: 'left'
        }
         
      });