
import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';

export default function BienvenueScreen(props) {
    return (

      
      <ImageBackground source={{uri: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg'}} style={styles.container}>
        
<TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Question1')}}>
        <Text>BIENVENUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Inscription')}}>
        <Text>Inscription</Text>
      </TouchableOpacity>

    </ImageBackground>

  );
 }
 
 const styles =StyleSheet.create({
  textBold:{
    marginTop: 100,fontWeight:'bold',textAlign:'center',marginBottom:50
  },textCenter:{
    textAlign:'center'
  }, container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    color:'white',
    padding: 15,
    borderColor: 'black',
    borderWidth: 2,
    width: '40%'
   }
})