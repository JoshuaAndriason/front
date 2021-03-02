import React, {useState, useEffect} from 'react';
import {View, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Button, ListItem, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ServiceScreen(props) {
  
    const services = [
        {
           name: 'Room Service',
           desc: 'Livraison de repas en partenariat avec Naturaliste, exclusivement pour les résidents de l’hôtel, avec privatisation de la salle voûtée - de 18h30 à 21h00',
           avatar: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700844/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/7_Picto_Delivery_fx3ujx.png'
        },
        {
            name: 'Room Service',
            desc: 'Livraison de repas en partenariat avec Naturaliste, exclusivement pour les résidents de l’hôtel, avec privatisation de la salle voûtée - de 18h30 à 21h00',
            avatar: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700844/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/7_Picto_Delivery_fx3ujx.png'
        },

    ]
    return (
      <View style={{flex:1}}>
         
      </View>
    );
  }
  
