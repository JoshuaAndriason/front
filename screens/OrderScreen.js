import React, {useState,useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon} from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';
import IPadress from "../url"

export function OrderScreen(props) {

  //Déclaration des ETATS
  const [isCommande, setIsCommande] = useState(false);
  const [isEvenement, setisEvenement] = useState(false);
  const [account, setAccount] = useState([])
  const [event, setEvent] = useState([])
  const [order, setOrder] = useState([])


  //Recupération de l'évent et commande et infos USER DU BACK 
useEffect(  () => { var accountFunction = async() =>{
  const data = await fetch(`http://${IPadress}:3000/account`, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${props.token}`
    })
    console.log(data.json)
    const body = await data.json()
    setAccount(body.saveUser)
    setEvent(body.saveEvents)
    setOrder(body.saveOrder)
  }
  accountFunction()       
  
  }, []); 

  //FORMAT DATE
const dateFormat = function(date){
  var newDate = new Date(date);
  var format = newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear();
  return format;
}
  

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

function mapStateToProps(state){
  return {token:state.token}
}  export default connect(
  mapStateToProps, 
  null,

)(OrderScreen);

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
