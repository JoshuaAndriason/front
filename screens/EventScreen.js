import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input, Text, ListItem, Icon, CheckBox, Overlay, Button} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function EventScreen(props) {
var checkBoxList =["Oui, je viens","Dommage ! Une prochaine fois","A voir selon le déroulement de ma journée"]

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
   

<View style={styles.container}>
    
    <HomeImage/>
<View style={styles.border}>
<Text h1>Thé de soirée - offert</Text>


    <Text style={{marginTop:20}}>Profitez du Céromnial du Thé proposé tous les soirs, de 21h à 23h dans le Lobby Biblothèque</Text>
 
    

{checkBoxList.map((e,i)=>{return(<CheckBox key={i} style={{marginTop:5}}
  containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '50%'}}
  title ={e}

  />)})}



</View>

      <Button title="VALIDER" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Merci pour votre retour.</Text>
        <Text>Nous avons pris en compte votre réponse.</Text>
        <Text>A très bientôt ! </Text>
        <Button title="RETOUR" onPress={() => {props.navigation.navigate('Home')}}/>
      </Overlay>

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
