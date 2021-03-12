import React, { useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import {  Text, ListItem, Icon } from "react-native-elements";
import HomeImage from "../components/HomeImage";
import {connect} from 'react-redux';
import IPadress from "../url";

export function AccountScreen(props) {

  //Déclaration des ETATS
  const [isCommande, setIsCommande] = useState(false);
  const [isEvenement, setisEvenement] = useState(false);
  const [account, setAccount] = useState([])
  const [event, setEvent] = useState([])
  const [order, setOrder] = useState([])


  //Recupération de l'évent et commande et infos USER DU BACK 
useEffect(  () => { var accountFunction = async() =>{
  const data = await fetch(`http://${IPadress}/account`, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${props.token}`
    })
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

  return (
    <ScrollView style={{backgroundColor:'#fff'}} >
      <HomeImage />
      <View style={styles.container}>
      {/* Home IMAGE */}
        

{/* Recap des INFOS DU USER */}
    <Text h4>Bonjour {account.lastName} !</Text>
    <Text style={{ marginTop: 10 }}>Numéro de chambre : {account.roomNumber}</Text>
    <Text style={{ marginTop: 10, marginBottom: 40 }}>
      Centre d'intérets :{account.motivation==='undefined'?"auncun centre d'intêret":account.motivation}
    </Text>
    <Text style={{ marginBottom: 20 }} h4>
      Récapitulatif :
    </Text>

{/*ACCORDION RECAP COMMANDES*/}
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setIsCommande(!isCommande);
      }}
    >
      <Text style={styles.text}>Mes commandes</Text>
    </TouchableOpacity>
    {isCommande ? (
      <>
        {order.map((item, i) => (
          <ListItem
            style={styles.list}
            key={i}
            bottomDivider
            containerStyle={{backgroundColor:'#AADEC0'}}
            onPress={() => {
              props.onSubmitOrder(item._id);props.navigation.navigate("Order")
            }}
          >
            <Icon name={item.icon} />
            <ListItem.Content >
              <ListItem.Title s>Commande du {dateFormat(item.dateService)} à {item.heureService}</ListItem.Title>
              <ListItem.Subtitle> N° {'CMD-'+item._id.slice(18)}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </>
    ) : null}
{/*ACCORDION RECAP EVENT*/}
    <TouchableOpacity
      style={styles.item}
      
      onPress={() => {
        setisEvenement(!isEvenement);
      }}
    >
      <Text style={styles.text}>Mes évènements</Text>
    </TouchableOpacity>
    {isEvenement ? (
      <>
        {event.map((item, i) => (
          <ListItem
            style={styles.list}
            containerStyle={{backgroundColor:'#AADEC0'}}
            key={i}
            bottomDivider
            
          >
          
              <ListItem.Title>{item.event.nameEvents}</ListItem.Title>

     

          </ListItem>
        ))}
      </>
    ) : null}
  </View>
</ScrollView>
  );
}


function mapStateToProps(state){
  return {token:state.token}
}
function mapDispatchToProps(dispatch) {
  return {
    onSubmitOrder: function(idOrder) {
        console.log('on ORDER',idOrder) 
      dispatch( {type: 'saveOrderId', idOrder: idOrder }) 
    }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
  )(AccountScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height:'100%',
    flexDirection: "column",
    textAlign: "center",

  },
  button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    padding: 10,
    width: "40%",
  },
  list: {
    width: "88%",
    backgroundColor: "#AADEC0",
    borderColor:'white',
    borderWidth: 1,

  },
  item: {
    borderColor: "#AADEC0",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    marginBottom:2
  },
  text: {
    fontSize: 18,
  },
});

