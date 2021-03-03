import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function DetailRecommendationScreen(props) {
  const [isRestaurantVisible, setIsRestaurantVisible] = useState(false)
  const [isFlaneriesVisible, setIsFlaneriesVisible] = useState(false)
  console.log("visible :", isRestaurantVisible);
  return (
    <View style={styles.container}>
      <HomeImage />
      
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