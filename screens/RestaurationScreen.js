import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import IPadress from "../url"



export default function RestaurationScreen(props) {
  const [isBreakfast, setIsBreakfast] = useState(false)
  const [isDiner, setIsDiner] = useState(false)
  const [breakfast, setBreakfast] = useState([])
  const [diner, setDiner] = useState([])


  useEffect(() => {
    async function getAllMenus() {
      const response = await fetch(`http://${IPadress}:3000/restauration/menus`)
      const data = await response.json()
      const menus = data.result
      setBreakfast(menus.filter(menu => menu.type == "PetitDejeuner"))
    }
    getAllMenus()
  }, []);


  return (
    <View style={styles.container}>
      <HomeImage />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.block}>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setIsBreakfast(!isBreakfast)
            }}>
            <Text style={styles.text}>Petit-Déjeuner</Text>
          </TouchableOpacity>
          {isBreakfast ?
            <>
              {breakfast.map((menu, i) => {
                return (
                  <View key={i} style={{ flex: 1, width: "100%", alignItems: "center" }}>
                    <TouchableOpacity
                      style={styles.list}
                    >
                      <Text style={styles.text}>{menu.nameArticle}</Text>
                      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Menu", {foodID : menu._id})}>
                        <Text style={{ color: "white" }}>{menu.prix} €</Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </>
            : null
          }
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate("aLaCarte", {foodType : "diner"})}>
            <Text style={styles.text}>Dîner</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate("aLaCarte", {foodType : "A La Carte"})}>
            <Text style={styles.text}>A la carte</Text>
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
    height: "auto",
    marginBottom: 20
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







