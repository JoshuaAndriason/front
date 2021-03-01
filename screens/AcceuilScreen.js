import React, {useState} from 'react';
import {View,Button} from 'react-native';
import { Text } from 'react-native-elements';


function AcceuilScreen(props) {

    
    return (
   <View>
  <Text>Vous êtes bien arrivé à Paris : </Text>
   <Text>là où l’esprit reste vif, prêt à se laisser 
   surprendre et surtout à se laisser voguer. </Text>
   
   <Text h3>Bienvenue dans notre hôtel… </Text>
   
   <Text> Commencez dès maintenant en vous connectant 
   à notre appli qui vous servira tout au long de votre séjour !</Text>
   <Text h1>Heading 1</Text>
<Text h2>Heading 2</Text>
<Text h3>Heading 3</Text>
<Text h4>Heading 4</Text>

   <Button title="Go page A"/>

   </View>
  );
}


  
export default AcceuilScreen