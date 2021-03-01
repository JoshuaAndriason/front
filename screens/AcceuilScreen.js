import React, {useState} from 'react';
import {View,Button,StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';


function AcceuilScreen(props) {

    
    return (
   <View>
  <Text style={styles.textCenter}>Vous êtes bien arrivé à Paris :
là où l’esprit reste vif, prêt à se laisser 
   surprendre et surtout à se laisser voguer. </Text>
   
   <Text style={styles.textBold}>Bienvenue dans notre hôtel… </Text>
   
   <Text style={styles.textBold}>Commencez dès maintenant en vous connectant 
   à notre appli qui vous servira tout au long de votre séjour !</Text>

   <Button title="Go page A"/>

   </View>
  );
}


  
export default AcceuilScreen

const styles =StyleSheet.create({
  textBold:{
    marginTop: 40,fontWeight:'bold',textAlign:'center'
  },textCenter:{
    textAlign:'center'
  }
})