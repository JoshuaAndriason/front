import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, Button, Image, CheckBox} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function EventScreen(props) {
    return(
      <View style={styles.container}>
   
 <View style= {{width : '100%'}}>
<Image source={{uri: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614593187/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/EVENT_TH%C3%89_cbxbn1.jpg'}}
style ={{ width : '100%', height: 200, marginBottom:10 }}
/>
</View>

      <Text h2>Cérémonial du Thé</Text>

      <Text h4 style={{marginTop:20, marginBottom:10}}>Tout les jours de 21h00 à 23h00 dans le Lobby Bibliothèque</Text>

      <Text h4 style={{marginTop:10, marginBottom:20}}>Les tea-times, pauses gourmandes 100% british, font actuellement fureur. Le temps d'un après-midi, on décompresse autour d'un bon thé et de pâtisseries à tomber, et on se fait chouchouter dans le magnifique cadre du Lobby Bibliothèque. Cette pause gourmande se savoure de préférence en couple, avec maman ou entre amis, et est propice aux confidences...</Text>


      <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='Oui, je serais'
  // checked={this.state.checked}
  />

    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='profiter de lhôtel'
  // checked={this.state.checked}
  />

<TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Home')}} >
        <Text>Valider</Text>
      </TouchableOpacity>




      </View>

    )};

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          flexDirection: 'column',
          textAlign: 'left'
        },
        button: {
          alignItems: "center",
          backgroundColor: "#AADEC0",
          padding: 10,
          width: '40%'
         }
         
      });