import React, {useState,useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text,Card} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';


export function RoomDirectoryDetailScreen(props) {
    const [detailRoomDirectory,setDetailRoomDirectory] = useState([])
       useEffect(  () => { var room = async() =>{
        var rawResponse = await fetch(`http://172.17.1.187:3000/roomDirectoryDetail/${props.letterRoomDirectory}`)
        var response = await rawResponse.json();
       setDetailRoomDirectory(response.filterRoomDirectory)
       }
  room()       

}, []);

console.log('fggg',detailRoomDirectory)


  return(
<View style={styles.container}>
<HomeImage/>
<ScrollView style={{marginTop: 15}}>




  {
    detailRoomDirectory.map((u, i) => {
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
  return {letterRoomDirectory:state.letterRoomDirectory}
}  export default connect(
  mapStateToProps, 

)(RoomDirectoryDetailScreen);

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