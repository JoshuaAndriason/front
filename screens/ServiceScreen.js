import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Image} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import IPadress from "../url"




export default function ServiceScreen(props) {

//LIST DES SERVICES AVEC PHOTO ET DESCRIPTION//

var box = [{content:'Petit-déjeuner à la parisienne, servi de 7h30 à 11h00 en salle voûtée ou en chambre - 15,00€',
url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700845/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/1_Picto_PtitDej_p0emw3.png'},{
content:'Honesty Bar à Vins - à partir de 07,00€',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700846/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/2_Picto_Bar_mj8lou.png'},{
content:'Goûter de l’après-midi et Thé de soirée - offerts',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700845/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/3_Picto_Gouthe_jvnfw1.png'},{
content:'Bibliothèque - en confiance',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700844/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/4_Picto_Bibli_np7tqm.png'},{
content:'Conseils de promenades et réservations - à discrétion',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700844/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/5_Picto_Conseils_rgghet.png'},{
content:'Réception - à votre disposition 24/7',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700846/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/14_Picto_Reception_jyqa3t.png'},{
content:'Accueil multilingue : français, anglais, espagnol',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700845/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/15_Picto_Multilingue_vrvy74.png'},{
content:'Wifi offert',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700845/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/16_Picto_Wifi_mh8lrb.png'},{
content:'Bagagerie',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700845/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/17_Picto_Bagagerie_gvt4jt.png'},{
content:'Ascenseur',url:'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614700846/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/PICTOS/18_Picto_Ascenseur_m6b1ca.png'}]

      
    return(
      <>
      <HomeImage uri="https://res.cloudinary.com/dgv5agwfj/image/upload/v1615296934/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/SERVICE_yeivwz.jpg"/>
      <ScrollView contentContainerStyle={{paddingTop:10}}>
        
        <View style={styles.container}>

{box.map((card,i)=>{
  return(<View key={i} style={styles.box}>
    <View style={styles.inner}>
    <Image source={{ uri: card.url }} style={{ width: 60, height: 60 }}></Image>
    <View style={styles.text}>
      <Text>{card.content}</Text>
      </View>
    </View>
    </View>)
})
}
    </View>
    </ScrollView>
</>
    )};

    const styles = StyleSheet.create({
        container: {
          height:'40%',
          padding:5,
          flexDirection:'row',
          flexWrap:'wrap'
        },box:{
          width:'48%',
          padding:5,
          margin:3,
           borderWidth: 2,
            borderColor:'#AADEC0'
        },inner:{
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
