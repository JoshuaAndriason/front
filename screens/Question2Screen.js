{/* Import components */}
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, ListItem, Icon, CheckBox } from 'react-native-elements';
import HomeImage from '../components/HomeImage'

import IPadress from "../url"

export default function Question2Screen(props) {
    // list CHECKBOX
  var checkBoxList = ["Cest prévu !", "Peut-être.", "Non, merci."]
  const [checked, setChecked] = useState('');
  

 async function handleSubmit(){
  console.log("answer:", checked);
// Set the value of user's motivation

  if(checked === "Cest prévu !" || checked === "Peut-être." ){
    let interest = "breakfast"


 // Sending collected information to the database 
    await fetch(`http://${IPadress}/questionnary/interest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `interest=${interest}&token=${props.token}`
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }else{
    console.log("rien");
    return
  }
 }

   

  return (
    <View style={styles.container}>

      <HomeImage />
      <View style={styles.border}>
        <Text style={styles.pagination}>2/3</Text>
        <Text style={styles.titleForm}>Envie de bien commencer la journée ?</Text>



        <Text style={{ marginTop: 20 }}>Que direz-vous d'un petit-déjeuner Parisien ? Très sélectif et soigneusement préparer sur un plateau, servi soit dans l'athmosphère typique de la cave voûtée ou dans l'intimité de votre chambre.</Text>



        {checkBoxList.map((option, i) => {
          return (<CheckBox key={i} style={{ marginTop: 5 }}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', width: '50%' }}
            title={option}
            checked={checked === option ? true : false}
            onPress={() => {
              setChecked(option)
            }}

          />)
        })}



      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit()
          props.navigation.navigate('Question3') 
          }} >
        <Text>Suivant</Text>
      </TouchableOpacity>

    </View>


  );
}

// Style elements
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
    width: '40%',
    borderRadius: 5,
  },
  list: {
    width: '100%',
  },
  border: {
    borderColor: '#AADEC0',
    borderWidth: 1,
    width: "90%",
    height: '55%',
    margin: 10,
    padding: 20
  }, 
  titleForm: {
    fontSize: 15,
    fontWeight: 'bold'
  }, 
  pagination: {
    borderColor: '#AADEC0',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingTop: 0,
    textAlign: 'right',
    color: '#AADEC0',
    fontWeight: 'bold',
    fontSize: 16
  }
});