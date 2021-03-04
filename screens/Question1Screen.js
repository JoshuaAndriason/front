import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, ListItem, Icon, CheckBox } from 'react-native-elements';
import HomeImage from '../components/HomeImage'

var checkBoxList = ["Le travail", "Les balades", "Une date à fêter", "Profiter de l'hotêl"]

function setMotivation(answer) {
  const motivation;

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


export default function Question1Screen(props) {
  const [checked, setChecked] = useState('');
  console.log("option:", checked);
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
                setMotivation(option)
              }}
            />
          )
        })}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { props.navigation.navigate('Question2') }} >
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

  }, titleForm: {
    fontSize: 15,
    fontWeight: 'bold'
  }, pagination: {
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




