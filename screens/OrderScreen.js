import React, {useState,useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon} from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';
import IPadress from "../url"

export function OrderScreen(props) {

  //Déclaration des ETATS
  const [order, setOrder] = useState([])
  const [orderDetails, setOrderDetails] = useState([])
  const [food,setFood] = useState([])

  //Recupération de l'évent et commande et infos USER DU BACK 
useEffect(  () => { var accountFunction = async() =>{
  const responseFood = await fetch(`http://${IPadress}/account/${props.idOrder}`)
  const bodyFood = await responseFood.json()
    setOrderDetails(bodyFood.saveOrder.order[0].details)
    setOrder(bodyFood.saveOrder)
    setFood(bodyFood.saveFood)
  }
  accountFunction()       
  
  }, []); 

  console.log('order',order)

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
   
<ScrollView style = {{backgroundColor:'#fff'}}>

    <View style={styles.container}>
    
    <HomeImage/>
    <Text style={{marginBottom:10}} h4>Détail de votre commande</Text>
    
      <Text style={{marginTop:10}} >Date de commande : {dateFormat(order.dateService)}</Text>
 
      <Text style={{marginTop:10,marginBottom:20}}>Heure de commande : {order.heureService}</Text>


      
  <Text style={styles.text}>{food.type}: {food.nameArticle}</Text>

      {
    orderDetails.map((item, i) => (
      <ListItem style={styles.list} key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{Object.values(item)} x {Object.keys(item) } </ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }


</View>

</ScrollView>

  );
}

function mapStateToProps(state){
  return {token:state.token,idOrder:state.idOrder}
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
    text:{
      textAlign:'left',
      fontSize: 17,
      width:'100%',
      fontWeight:'bold',
      marginLeft: 70, 
      color:"#AADEC0",
    }
});
