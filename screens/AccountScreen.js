import React, { useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Input, Text, ListItem, Icon } from "react-native-elements";
import HomeImage from "../components/HomeImage";
import {connect} from 'react-redux';
import IPadress from "../url";

export function AccountScreen(props) {
  const [isCommande, setIsCommande] = useState(false);
  const [isEvenement, setisEvenement] = useState(false);
  const [account, setAccount] = useState([])
  const [event, setEvent] = useState([])
  const [order, setOrder] = useState([])

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

  console.log('account',account)
  console.log('event',event)
  console.log('order',order)
  const list = [
    {
      title: "Commande du 16/04/2021 à 21h37",
      subtitle: "Cmd N° k87b65",
      icon: "av-timer",
    },
    {
      title: "Commande du 16/04/2021 à 23h59",
      subtitle: "Cmd N° 16f9H7",
      icon: "av-timer",
    },
    {
      title: "Commande du 17/04/2021 à 18h26",
      subtitle: "Cmd N° 8j09kl",
      icon: "av-timer",
    },
  ];

  

  return (
    <ScrollView>
      <View style={styles.container}>
        <HomeImage />

    <Text>Token :{props.token}</Text>

    <Text h4>Bonjour {account.lastName} !</Text>

    <Text style={{ marginTop: 10 }}>Numéro de chambre : {account.roomNumber}</Text>

    <Text style={{ marginTop: 10, marginBottom: 40 }}>
      Centre d'intérets :{account.motivation}
    </Text>

    <Text style={{ marginBottom: 20 }} h4>
      Récapitulatif :
    </Text>

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
        {list.map((item, i) => (
          <ListItem
            style={styles.list}
            key={i}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("Order");
            }}
          >
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </>
    ) : null}

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
            key={i}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("Order");
            }}
          >
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
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
}  export default connect(
  mapStateToProps, 
  null,

)(AccountScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
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
    width: "100%",
  },
  item: {
    borderColor: "#AADEC0",
    alignItems: "center",
    borderWidth: 0.5,
    padding: 10,
    width: "90%",
  },
  text: {
    fontSize: 18,
  },
});

