{/* Import components */}
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, ListItem, Icon, CheckBox } from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import { connect } from 'react-redux';
import IPadress from "../url"


  // fonction choix de centre d'intérêt
function setMotivation(answer) {
  let motivation;

  switch (answer) {
    case "Le travail":
      motivation = "work";
      break;
    case "Les balades":
      motivation = "stroll";
      break;
    case "Une date à fêter":
      motivation = "celebration"
      break;
    case "Profiter de l'hôtel":
      motivation = "hotel"
  }
}


export function Question1Screen(props) {
  console.log("token", props.token);
  // list CHECKBOX
  var checkBoxList = ["Le travail", "Les balades", "Une date à fêter", "Profiter de l'hotêl"]
  const [checked, setChecked] = useState('');

  async function handleSubmit() {
    console.log("answer:", checked);
// Set the value of user's motivation
    let motivation;
    switch (checked) {
      case "Le travail":
        motivation = "work"
        break;
      case "Les balades":
        motivation = "stroll"
        break;
      case "Une date à fêter":
        motivation = "celebration"
        break;
      case "Profiter de l'hôtel":
        motivation = "hotel"
    }


// Sending collected information to the database
    await fetch(`http://${IPadress}/questionnary/motivation/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `motivation=${motivation}&token=${props.token}`
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }



  return (
    <View style={styles.container}>

      <HomeImage />
      <View style={styles.border}>
        <Text style={styles.pagination}>1/3</Text>
        <Text style={styles.titleForm}>Commençons par vous en particulier...</Text>
        <Text style={{ marginTop: 20 }}>Venez vous à Paris pour :</Text>
        {checkBoxList.map((option, i) => {
          return (
            <CheckBox
              key={i}
              style={{ marginTop: 5 }}
              containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', width: '50%' }}
              title={option}
              checked={checked === option ? true : false}
              onPress={() => {
                setChecked(option)
              }}
            />
          )
        })}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit()
          props.navigation.navigate('Question2')
        }} >
        <Text>Suivant</Text>
      </TouchableOpacity>

    </View>


  );
}

function mapStateToProps(state) {
  return { token: state.token }
} export default connect(
  mapStateToProps,
  null,

)(Question1Screen);


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