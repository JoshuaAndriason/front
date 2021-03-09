import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { ListItem, Avatar,Card,Image,Button } from 'react-native-elements'
import HomeImage from '../components/HomeImage'
import IPadress from "../url"

export default function EventScreenDetails(props) {

    const [events, setEvents] = useState([])

    useEffect(() => {
        var eventsFunction = async () => {
            var rawResponse = await fetch(`http://${IPadress}:3000/events`)
            var response = await rawResponse.json();
            console.log(response, "je console log response ")

            setEvents(response.events)
        }
        eventsFunction()

    }, []);
    console.log('events front gwendolin',events)

  return (
<ScrollView style={{marginTop: 25}}>
{
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
              title="Je m'inscris" onPress={() => props.navigation.navigate("Event")}/>
        </Card>
    );
  })
}

 </ScrollView>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
