import React, {useState} from 'react';
import {StyleSheet, View, Avatar, TouchableOpacity} from 'react-native';
import {Input, Text, ListItem, Accessory} from 'react-native-elements';
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
<ScrollView>

<View style={styles.container}>

<HomeImage/>

<Text h4>Nos services de A à Z</Text>

  {
list.map((item, i) => (
  <ListItem style={styles.list} key={i} bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
))
}

<Text style={{marginTop:20}} >Total TTC : 83,00€</Text>

</View>

</ScrollView>

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
    width: '40%' 
  },
  list: {
      width: '100%',
    },
});