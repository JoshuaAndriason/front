import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, ListItem, Icon} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function LoginScreen(props) {

  const list = [
    {
      title: 'Commande du 16/04/2021 à 21h37',
      subtitle : 'Cmd N° k87b65',
      icon: 'av-timer'
    },
    {
      title: 'Commande du 16/04/2021 à 23h59',
      subtitle : 'Cmd N° 16f9H7',
      icon: 'av-timer'
    },
    {
      title: 'Commande du 17/04/2021 à 18h26',
      subtitle : 'Cmd N° 8j09kl',
      icon: 'av-timer'
    },
  ]

  return (
   
    <View style={styles.container}>
    
    <HomeImage/>
    
    <Text h4>Bonjour Frederic !</Text>

      <Text style={{marginTop:40}} >Date de séjour : Du 16/04/2021 au 19/04/2021</Text>
 
      <Text style={{marginTop:10}}>Numéro de chambre : 405</Text>

      <Text style={{marginTop:10, marginBottom:40}}>Centre d'intérets : Restauration (F&B)</Text>

      <Text style={{marginBottom:40}} h4>Voir mes commandes</Text>

      {
    list.map((item, i) => (
      <ListItem style={styles.list} key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
 
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
    width: '40%' 
  },
  list: {
      width: '100%',
    },
});




