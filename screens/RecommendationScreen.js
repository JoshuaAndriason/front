import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function RecommendationScreen(props) {
  const [isRestaurantVisible, setIsRestaurantVisible] = useState(false)
  console.log("visible :", isRestaurantVisible);
  return (
    <View style={styles.container}>
      <HomeImage />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('restauration')
              setIsRestaurantVisible(true)
            }}>
            <Text style={styles.text}>Restauration</Text>
          </TouchableOpacity>
          {isRestaurantVisible ? 
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
              <TouchableOpacity
                style={styles.list}
                onPress={() => console.log('{props.navigation.navigate()}')}>
                <Text style={styles.text}>Restaurant "Le Procope"</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.list}
                onPress={() => console.log('{props.navigation.navigate()}')}>
                <Text style={styles.text}>Restaurant "La Capsule"</Text>
              </TouchableOpacity>
            </View> 
            : null
            }

        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('{props.navigation.navigate()}')}>
            <Text style={styles.text}>Flâneries</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>


  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'left'
  },
  block: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'left',
    height: "auto"
  },
  button: {
    borderColor: "#AADEC0",
    borderWidth: 0.5,
    padding: 10,
    width: '90%',
  },
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left'
  },
  list: {
    //display: "none",
    backgroundColor: "#AADEC0",
    borderColor: "#AADEC0",
    borderWidth: 0.5,
    padding: 10,
    width: '88%',
    marginBottom: 5
  }

});