import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon, CheckBox} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function Question3Screen(props) {

  return (
   

<View style={styles.container}>
    
    <HomeImage/>

    <Text h4>Commençons par vous en particulier...</Text>

    <Text h4 style={{marginTop:20}}>3/3</Text>

    <Text h2 style={{marginTop:20, marginBottom:20}}>Besoins ou envies ?</Text>
 
    <Text style={styles.textCenter}>Ah Paris… Capitale française de la gastronomie et de l’amour, Paris jouit d’un patrimoine historique et culturel incomparable. C’est d’ailleurs ce qu’apprécient les millions de touristes qui viennent visiter Paris chaque année.</Text>

    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='Gourmand de toutes propositions culinaires'
  // checked={this.state.checked}
  />

    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='Conseils de promenades'
  // checked={this.state.checked}
  />

  <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='Tranquilité souhaitée pendant mon séjour'
  // checked={this.state.checked}
  />

<TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Question3')}} >
        <Text>Valider</Text>
      </TouchableOpacity>

</View>


  );
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
  list: {
      width: '100%',
    },
});