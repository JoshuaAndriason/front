import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import {
  Input,
  Text,
  ListItem,
  Icon,
  CheckBox,
  Overlay,
  Button,
} from "react-native-elements";
import HomeImage from "../components/HomeImage";
import { connect } from "react-redux";
import IPadress from "../url";

export function EventScreen(props) {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState("");
  const [isComing, setIsComing] = useState(false);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    var event = async () => {
      var rawResponse = await fetch(
        `http://${IPadress}:3000/events/${props.idEvent}`
      );
      var response = await rawResponse.json();
      setEvent(response.event);
    };
    event();
  }, []);

  console.log("fffffff", event);

  var handleSubmit = async () => {
    //remplacer par la route qui est censé enregistrer la réponse de l'inscription à l'event//

    const data = fetch(`http://${IPadress}:3000/confirmation`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `isComing=${isComing}&token=${props.token}&eventId=${props.idEvent}`,
    });

    setVisible(!visible);
  };
  console.log(props.token, "token");

  var checkBoxList = ["Oui, je viens", "Dommage ! Une prochaine fois"];
  console.log(isComing);
  function setAnswer(answer) {
    if (answer === "Oui, je viens") {
      setIsComing(true);
    } else if (answer === "Dommage ! Une prochaine fois") setIsComing(false);
  }

  // const toggle overlay affiche message de conf et fait la requete en meme temps//
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
   

<View style={styles.container}>
    
    <HomeImage uri={event.image}/>
    <Text>token :{props.token}</Text>
    <Text>event :{props.idEvent}</Text>
<ScrollView style={styles.border}>

<Text style={styles.text}>{event.nameEvents}</Text>
<Text style={{marginTop:20}}>{event.description}</Text>
 


    {checkBoxList.map((option,i) => {
      return(
      <CheckBox key={i} style={{marginTop:5}}
    containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', width: '100%'}}
    title ={option}
    checked = {checked === option ? true : false }
    onPress = {() => {
      setChecked(option)
      setAnswer(option)
     }}

  />)})}

</ScrollView>
<Button buttonStyle={{ marginTop:10, marginBottom:50, backgroundColor:'#AADEC0', width:200, color:'red'}} title="Valider" onPress={handleSubmit} />

      <Overlay isVisible={visible} >
    <Text>Merci pour votre retour.</Text>
        <Text>Nous avons pris en compte votre réponse.</Text>
        <Text>A très bientôt ! </Text>
        <Button
          title="RETOUR"
          onPress={() => {
            toggleOverlay();
            props.navigation.navigate("BottomNavigator");
          }}
        />
      </Overlay>
    </View>
  );
}

function mapStateToProps(state) {
  return { token: state.token, idEvent: state.idEvent };
}

export default connect(mapStateToProps, null)(EventScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",

    flexDirection: "column",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    padding: 10,
    width: '40%' ,
    borderRadius:2,
  },
  list: {
      width: '100%',
    },
    border:{
      borderColor:'#AADEC0',
      borderWidth:3,
      width:"90%",
      margin:10,
      padding:20,
      paddingBottom:30

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
},text:{
  fontSize:25,
  fontWeight:'bold',
  textAlign:'center',
}
});
