import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon, CheckBox} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function Question1Screen(props) {

  return (
   

<View style={styles.container}>
    
    <HomeImage/>

    <Text h4>Commençons par vous en particulier...</Text>

    <Text h4 style={{marginTop:20}}>1/3</Text>

    <Text h2 style={{marginTop:20, marginBottom:20}}>Venez vous à Paris pour :</Text>
 
    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='le travail'
  // checked={this.state.checked}
  />

    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='les balades'
  // checked={this.state.checked}
  />

    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='une date à fêter'
  // checked={this.state.checked}
  />

    <CheckBox style={{marginTop:15}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ='profiter de lhôtel'
  // checked={this.state.checked}
  />

<TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Question2')}} >
        <Text>Suivant</Text>
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




