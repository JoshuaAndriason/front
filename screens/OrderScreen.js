import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function OrderScreen(props) {

  const list = [
    {
      title: '1 Bouteille de Champagne Ruinard (75cl)',
      subtitle : 'Prix unitaire : 70,00€',
    },
    {
      title: '1 Petit-déjeuner continental',
      subtitle : 'Prix unitaire : 13,00€',
    },
  ]
  
  return (
   
<ScrollView>

    <View style={styles.container}>
    
    <HomeImage/>
    
    <Text h4>À propos de votre commande</Text>

      <Text style={{marginTop:20}} >Date de commande : 16/04/2021</Text>
 
      <Text style={{marginTop:10}}>Heure de commande : 21h37</Text>

      <Text style={{marginTop:10, marginBottom:40}}>Numéro de commande : k87b65</Text>

      <Text style={{marginBottom:20}} h4>Détail de votre commande</Text>

      {
    list.map((item, i) => (
      <ListItem style={styles.list} key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
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
