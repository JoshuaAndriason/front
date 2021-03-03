import React, {useState} from 'react';
import {View,StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';
import HomeImage from '../components/HomeImage'

function BienvenueScreen(props) {
    return (
   <View style={styles.container}>
     
     <View style= {{width : '100%'}}>
     <HomeImage/>
    </View>
  <Text style={styles.textCenter}>Vous êtes bien arrivé à Paris :
là où l’esprit reste vif, prêt à se laisser 
   surprendre et surtout à se laisser voguer. </Text>
   
   <Text style={styles.textBold}>Bienvenue dans notre hôtel… </Text>
   
   <Text style={styles.textBold}>Commencez dès maintenant en vous connectant 
   à notre appli qui vous servira tout au long de votre séjour !</Text>

<TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Signin')}}>
        <Text>C'est Parti !!</Text>
      </TouchableOpacity>

   </View>
  );
}


  
export default BienvenueScreen

const styles =StyleSheet.create({
  textBold:{
    marginTop: 20,fontWeight:'bold',textAlign:'center',marginBottom:20
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
    padding: 10,
    width: '40%'
   }
})