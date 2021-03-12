import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'

import {connect} from 'react-redux';
import IPadress from "../url"




export function RestaurationScreen(props) {
  // system toggle to display the items of breakfast
  const [isBreakfast, setIsBreakfast] = useState(false)
  // array which store the breakfast list from the BDD
  const [breakfast, setBreakfast] = useState([])
 


  useEffect(() => {
    async function getAllMenus() {
      const response = await fetch(`http://${IPadress}/restauration/menus`)
      const data = await response.json()
      const menus = data.result
      setBreakfast(menus.filter(menu => menu.type == "PetitDejeuner"))
    }
    getAllMenus()
  }, []);

 
  return (
    <View style={styles.container}>
      <HomeImage uri="https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590448/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7190_hotel_des_deux_iles_bd_gq0vyj.jpg"/>
      
      <ScrollView style={{ flex: 1, width: "100%" }}>
        {/* Display breakfast items */}
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setIsBreakfast(!isBreakfast)
            }}>
            <Text style={styles.text}> Petit-Déjeuner </Text> 
            
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
                      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Menu", {foodID : menu._id, price: menu.prix, token: props.token})}>
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
        {/* get diner items to send to aLaCarte composent */}
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate("aLaCarte", {foodType : "diner", token: props.token})}>
            <Text style={styles.text}>Dîner</Text>
          </TouchableOpacity>
        </View>
        {/* get carte items to send to aLaCarte composent */}
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate("aLaCarte", {foodType : "Carte", token: props.token})}>
            <Text style={styles.text}>A la carte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>


  )
};
function mapStateToProps(state){
  return {token:state.token}
}  export default connect(
  mapStateToProps, 
  null,

)(RestaurationScreen);


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
    marginBottom: 5
  },
  item: {
    borderColor: "#AADEC0",
    borderWidth: 1,
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
    borderWidth: 2,
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







