import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon, CheckBox} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function Question2Screen(props) {
var checkBoxList =["Cest prévu !","Non, merci."]
  return (
   

<View style={styles.container}>
    
    <HomeImage/>
<View style={styles.border}>
<Text style={styles.pagination}>2/3</Text>
    <Text style={styles.titleForm}>Envie de bien commencer la journée ?</Text>



    <Text style={{marginTop:20}}>Que direz-vous d'un petit-déjeuner Parisien ? Très sélectif et soigneusement préparer sur un plateau, servi soit dans l'athmosphère typique de la cave voûtée ou dans l'intimité de votre chambre.</Text>
 
    

{checkBoxList.map((e,i)=>{return(<CheckBox key={i} style={{marginTop:5}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ={e}

  />)})}



</View>
<TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Question3')}} >
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
    width: '40%' ,
    borderRadius:5,
  },
  list: {
      width: '100%',
    },
    border:{
      borderColor:'#AADEC0',
      borderWidth:1,
      width:"90%",
      height:'55%',
      margin:10,
      padding:20

    },titleForm:{
      fontSize:15,
      fontWeight:'bold'
    },pagination:{
      borderColor:'#AADEC0',
      borderBottomWidth:1,
      marginBottom:20,
      paddingTop:0,
      textAlign:'right',
      color:'#AADEC0',
      fontWeight:'bold',
      fontSize:16
    }
});




