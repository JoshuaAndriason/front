import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import {Card,Button } from 'react-native-elements'
import HomeImage from '../components/HomeImage'
import IPadress from "../url"
import { connect } from 'react-redux';

export function EventScreenDetails(props) {

    const [events, setEvents] = useState([])

  // RECUPERATION DE TOUS LES EVENEMENTS DU BACK//

    useEffect(() => {
        var eventsFunction = async () => {
            var rawResponse = await fetch(`http://${IPadress}/events`)
            var response = await rawResponse.json();
            setEvents(response.events)
        }
        eventsFunction()

    }, []);

  return (
<View style={styles.container}>

<HomeImage uri='https://res.cloudinary.com/dgv5agwfj/image/upload/v1615297198/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/EVENTS_LARGE_qehdzy.jpg'/>
    
<ScrollView >
{//AFFICHAGE DES EVENEMENTS DANS DES CARDS//
  events.map((u, i) => {
    return (
        
      <Card key={i}>
          <Card.Title >{u.nameEvents}</Card.Title>
          <Card.Divider/>
          <Card.Image source={{uri:u.image}}></Card.Image>
          <Card.Divider/>
          <Text  style={{marginBottom: 10}}>
              {u.description}
              </Text>
              <Card.Divider/>
              <Button
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:'#AADEC0'}}
              title="Je m'inscris" onPress={() =>{props.onSubmitEvent(u._id); props.navigation.navigate("Event")}}/>
        </Card>
    );
  })
}

 </ScrollView>
</View>
);
}

function mapStateToProps(state){
  return {token:state.token}
} 
 function mapDispatchToProps(dispatch) {
  return {
    onSubmitEvent: function(idEvent) {
        console.log('on SUBMIT EVENT',idEvent) 
      dispatch( {type: 'saveEventId', idEvent: idEvent }) 
    }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
  )(EventScreenDetails);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
