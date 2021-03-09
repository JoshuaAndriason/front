import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, ListItem, Accessory, Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';
import IPadress from "../url"


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

    
  const badge = [
    {
      badge: 'ACCUEIL',
    },
    {
      badge: 'DEPART',
    },
    {
      badge: 'HONESTYBAR',
    },
    {
      badge: 'PRESSING',
    },
    {
      badge: 'WIFI',
    }
  ]
  return(
<View style={styles.container}>

<HomeImage/>

<Text style={{marginBottom:20}} h4>Notre hôtel de A à Z</Text>


<View style={styles.badge}>
{
          badge.map((item, i) => (
      <TouchableOpacity
        style={styles.button} key={i}
        onPress={() => {props.onSubmitBadge(item.badge);props.navigation.navigate('RoomDirectoryBadge')}}>
        <Text>{item.badge}</Text>
      </TouchableOpacity>
      ))
    }
</View>


  <ScrollView style={{width: '100%'}}>
          {
          list.map((item, i) => (
          <ListItem style={styles.list} key={i} bottomDivider 
            onPress={() => {props.onSubmitLetter(item.title);props.navigation.navigate('RoomDirectoryDetail')}}>
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
  function mapDispatchToProps(dispatch) {
    return {
      onSubmitLetter: function(letter) { 
        dispatch( {type: 'saveLetter', letterRoomDirectory: letter }) 
      },onSubmitBadge: function(badge) { 
        console.log(badge, "fred")
        dispatch( {type: 'saveBadge', badgeRoomDirectory: badge }) 
      }
    }
  }


  export default connect(
    null,mapDispatchToProps)(RoomDirectoryScreen)
  




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
    borderRadius:50,
    marginBottom: 8,
    marginLeft: 8,
    width: '30%',
    textAlign: "center", 
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
    badge : {
      alignItems: "center",
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '90%',
      justifyContent: 'center',
    }
});