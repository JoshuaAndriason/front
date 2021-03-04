import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, CheckBox } from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function Question2Screen(props) {
  var checkBoxList = ["Gourmand de toutes propositions culinaires", "promenades", "Tranquilité souhaitée pendant mon séjour"]
  return (


    <View style={styles.container}>

      <HomeImage />

      <View style={styles.border}>

        <Text style={styles.pagination}>3/3</Text>

        <Text style={styles.titleForm}>Besoins ou envies ?</Text>



        <Text style={{ marginTop: 20 }}>Ah Paris… Capitale française de la gastronomie et de l’amour, Paris jouit d’un patrimoine historique et culturel incomparable. C’est d’ailleurs ce qu’apprécient les millions de touristes qui viennent visiter Paris chaque année.</Text>



        {checkBoxList.map((e, i) => {
          return (<CheckBox key={i} style={{ marginTop: 5, width: '100%' }}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', width: '100%' }}
            title={e}

          />)
        })}



      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { props.navigation.navigate('BottomNavigator') }} >
        <Text>Confirmer</Text>
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




