{/* Import components */}
import React, {useState,useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text,Card} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import IPadress from "../url"
import {connect} from 'react-redux';
export function RoomDirectoryBadgeScreen(props) {
    

// Recovery of the badge OnPress passed to the reducer and fetch to DB
  const [badgeRoomDirectory,setBadgeRoomDirectory] = useState([])
        useEffect(  () => { var room = async() =>{
        var rawResponse = await fetch(`http://${IPadress}/roomDirectoryBadge/${props.badgeRoomDirectory}`)
        var response = await rawResponse.json();
        setBadgeRoomDirectory(response.filterRoomDirectory)
       }
  room()       
}, []);
console.log('fggg',badgeRoomDirectory)
  return(

    
// Setup for RoomDirectoryList Card (title + description) via index
<View style={styles.container}>
<HomeImage/>
<ScrollView style={{marginTop: 15}}>
  {
    badgeRoomDirectory.map((u, i) => {
      return (

        <Card key={i}>
              <Card.Title >{u.itemName}</Card.Title>
              <Card.Divider/>
              <Text  style={{marginBottom: 10}}>
              {u.description}
              </Text>
              <Card.Divider/>
       </Card>
      );
    })
  }

</ScrollView>
</View>

);
}
function mapStateToProps(state){
  return {badgeRoomDirectory:state.badgeRoomDirectory}
}  export default connect(
  mapStateToProps, 
)(RoomDirectoryBadgeScreen);


// Style elements
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
    button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    padding: 10,
    width: '40%' 
  },
});