import React from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import email from 'react-native-email';
import HomeImage from '../components/HomeImage';
import { FontAwesome } from '@expo/vector-icons'; 
import { H2 } from 'native-base';
import call from 'react-native-phone-call';
 
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <HomeImage uri="https://res.cloudinary.com/dgv5agwfj/image/upload/v1615366939/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/reception_oilqto.jpg"/>
                <H2 style={{ marginBottom: "8%"}}>Besoin de nous ?</H2>

                <FontAwesome name="envelope"
                name='envelope'
                color='#AADEC0'
                size='120%' 
                onPress={this.handleEmail}/>
                <Text style={{ marginBottom: "8%"}}>
                Envoyer un message à la réception</Text>

                <Icon
                name='tty'
                color='#AADEC0'
                size='150%' 
                onPress={this.makeCall}/>
                <Text>Appeler la réception</Text>

            </View>
        )
    }
 


    

    handleEmail = () => {
        const to = ['info@hoteldesdeuxiles.com']
        email(to, {
            subject: 'Demande client via Application Hôtel des Deux-Îles',
            body: 'Comment pourrions-nous vous aider ?'
        }).catch(console.error)
    }

    makeCall = (number) => {
      const args = {
          number: '0143261335',
          prompt: true 
      }
     call(args).catch(console.error)
    }

}
 


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
})