import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, ListItem, Accessory, Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';


function RoomDirectoryScreen(props) {


  
  const list = [
    {
      title: 'A',
    },
    {
      title: 'B',
    },
    {
      title: 'C',
    },
    {
      title: 'D',
    },
    {
      title: 'E',
    },
    {
      title: 'F',
    },
    {
      title: 'G',
    },
    {
      title: 'H',
    },
    {
      title: 'I',
    },
    {
      title: 'J',
    },
    {
      title: 'K',
    },
    {
      title: 'L',
    },
    {
      title: 'M',
    },
    {
      title: 'N',
    },
    {
      title: 'O',
    },
    {
      title: 'P',
    },
    {
      title: 'Q',
    },
    {
      title: 'R',
    },
    {
      title: 'S',
    },
    {
      title: 'T',
    },
    {
      title: 'U',
    },
    {
      title: 'V',
    },
    {
      title: 'W',
    },
    {
      title: 'X',
    },
    {
      title: 'Y',
    },
    {
      title: 'Z',
    },
  ]

  return(


<View style={styles.container}>

<HomeImage/>

<Text style={{marginBottom:10}} h4>Notre hôtel de A à Z</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>ACCUEIL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>DÉPART</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>HONESTY BAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>PRESSING</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>WIFI</Text>
      </TouchableOpacity>


  <ScrollView style={{width: '100%'}}>
          {
          list.map((item, i) => (
          <ListItem style={styles.list} key={i} bottomDivider 
            onPress={() => {props.findClickLetter(item.title)}}>
              

              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
  </ScrollView>
</View>
  )}

var saveRoomDirectoryId = []

function mapDispatchToProps(dispatch) {
  return {
    findClickLetter: function (idRoomDirectoryLetter) {
      dispatch({type: "saveRoomDirectoryId", idRoomDirectoryLetter: idRoomDirectoryLetter})
    }
  }
}



{/* Export */}
export default connect(
  null, 
  mapDispatchToProps
)(RoomDirectoryScreen);




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
    borderRadius:5,
    padding: 10,
    width: '30%' 
  },
  list: {
      width: '100%',
    },
  View: {
      flex: 1,
    },
  ScrollView: {
    width: '100%',
    },
});