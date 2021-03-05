import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, ListItem, Accessory, Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';


export function RoomDirectoryDetailScreen(props) {

  useEffect(() => {
    const sendLetter = async() => {
      const data = await fetch(`http://172.17.1.100:3000/RoomDirectoryDetail/${props.idRoomDirectoryLetter}`)
    .then(res => console.log(res));
    }
    sendLetter()    
  },[])

    
  return(


<View style={styles.container}>
<Text h1> Lettre {props.idRoomDirectoryLetter}</Text>





</View>
);
}




function mapStateToProps(state){
  return {idRoomDirectoryLetter:state.idRoomDirectoryLetter}
}  export default connect(
  mapStateToProps, 
)(RoomDirectoryDetailScreen);







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
    width: '40%' 
  },
  list: {
      width: '100%',
    },
    button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    padding: 10,
    width: '40%' 
  },
});