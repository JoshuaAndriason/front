import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView,Image } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import IPadress from "../url"


export default function DetailRecommendationScreen(props) {

  
        
      return(
        <>
        <HomeImage/>

        <ScrollView contentContainerStyle={{paddingTop:10}}>
          <View style={styles.container}>
  
      <View  style={styles.boxLogo}>
      <View style={styles.inner}>
      <Image source={{ uri: 'https://ugc.zenchef.com/8/3/8/7/1/1/3/4/7/4/1575045139_406/f802db47c4c224764f7ff972150106ac.png' }} style={{ width: 130 , height: 40,marginTop: 5 }}></Image>
      <View style={styles.text}><Text>Adresse : 102 Boulevard du Montparnasse, 75014 Paris</Text></View>
      </View>
      </View>

      <View  style={styles.boxMap}>
      <View style={styles.inner}>
      <Image source={{ uri: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614782418/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/Capture_d_%C3%A9cran_2021-03-03_%C3%A0_15.39.45_jln6mu.png' }} style={{ width: 160 , height: 150,marginTop: 5,marginLeft:20 }}></Image>
      </View>
      </View>

      <View  >
     
      <View style={styles.text}><Text>Composé d’une trentaine de collaborateurs, l’équipe commerciale du Groupe Bertrand est spécialisée dans la restauration, et dans l’organisation événementielle. Notre équipe de professionnel(les) vous accompagne dans vos projets pour satisfaire vos besoins, et faire de votre événement un moment incroyable pour vous et vos convives. Le but étant de vous émerveiller le temps d’un repas, vous captiver pendant une réunion, ou encore vous surprendre pour une soirée.

L’ensemble de nos collaborateurs travaillent en équipe pour mener à bien vos projets les plus ambitieux.

Avec une forte expertise dans le métier de la restauration et la promesse d’une grande réactivité, la satisfaction du client reste notre priorité. Grace à une équipe de qualité, le Groupe Bertrand est devenu en peu de temps un leader sur le marché de la restauration et de l'événementiel.</Text></View>
      </View>
      </View>

    
      </ScrollView>
  </>
      )
};
const styles = StyleSheet.create({
  container: {
    height:'80%',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap'
  },boxLogo:{
    width: 200,
    height: 150,
    margin:4,
  },boxMap:{
    width: 100,
    height: 150,
    margin:4,
  }
  ,inner:{
      alignItems: 'center',
      justifyContent:'center'

  },text:{
    padding:5,
      alignItems: 'center',
      alignContent:'center',
      justifyContent:'center',
      margin:10
  }
   
});
