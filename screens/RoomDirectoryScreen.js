import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, ListItem, Accessory, Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'



export default function RoomDirectoryScreen(props) {
    
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

<View>

<HomeImage/>

<Text style={{marginBottom:20}} h4>Nos services de A à Z</Text>


<View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>Accueil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>Départ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>Honesty Bar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>Pressing</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}} >
        <Text>Wifi</Text>
      </TouchableOpacity>
      </View>


</View>

<ScrollView style={{width : '100%'}}>

  {
list.map((item, i) => (
  <ListItem style={styles.list} key={i} bottomDivider onPress={() => {props.navigation.navigate('RoomDirectoryDetail')}}>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
))
}

</ScrollView>
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
    borderRadius: 5,
    padding: 10,
    width: '60%' 
  },
  list: {
      width: '100%',
    },
  View: {
      flex: 1,
    },
});