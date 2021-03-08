import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import IPadress from "../url"


export default function RecommendationScreen(props) {
  const [isRestaurantVisible, setIsRestaurantVisible] = useState(false)
  const [isFlaneriesVisible, setIsFlaneriesVisible] = useState(false)
  console.log("visible :", isRestaurantVisible);
  return (
    <View style={styles.container}>
      <HomeImage />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              console.log('restauration')
              setIsRestaurantVisible(!isRestaurantVisible)
            }}>
            <Text style={styles.text}>Restaurant recommandé</Text>
          </TouchableOpacity>
          {isRestaurantVisible ?
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>

              <TouchableOpacity
                style={styles.list}
              >
                <Text style={styles.text}>Restaurant "Le Procope"</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("DetailRecommendation")}><Text style={{ color: "white" }}>Voir</Text></TouchableOpacity>
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
            style={styles.item}
            onPress={() => setIsFlaneriesVisible(!isFlaneriesVisible)}>
            <Text style={styles.text}>Flâneries</Text>
          </TouchableOpacity>
          {isFlaneriesVisible ?
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>

              <TouchableOpacity
                style={styles.list}
              >
                <Text style={styles.text}>La Coupole</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}><Text style={{ color: "white" }}>Voir</Text></TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.list}
                onPress={() => console.log('{props.navigation.navigate()}')}>
                <Text style={styles.text}>Flâneries 1</Text>
              </TouchableOpacity>
            </View>
            : null
          }
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
  item: {
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
    backgroundColor: "#AADEC0",
    borderColor: "#AADEC0",
    borderWidth: 0.5,
    padding: 10,
    width: '88%',
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  button: {
    borderColor: "#6EBA8E",
    backgroundColor: "#6EBA8E",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingRight: 15,
    paddingLeft: 15,
  }

});