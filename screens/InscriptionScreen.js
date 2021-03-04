import React, {useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function InscriptionScreen(props) {
    const [emailSignUp, setEmailSignUp] = useState();
    const [lastNameSignUp, setLastNameSignUp] = useState();
    const [roomNumberSignUp, setRoomNumberSignUp] = useState();

    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [listErrorsSignup, setErrorsSignup] = useState([])

    var handleSubmitSignup = async () => {
    
    
      const data = await fetch('http://172.17.1.186:3000/sign-up', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `lastnameFromFront=${lastNameSignUp}&emailFromFront=${emailSignUp}&roomNumberFromFront=${roomNumberSignUp}`
      })
  
      const body = await data.json()
     console.log(body)
     if(body.result == true){
      setUserExists(true)
      props.addToken(body.token)
      } else {
      setErrorsSignup(body.error)
      }
    }
  return (
    <View style={styles.container}>
    
    <HomeImage/>
    <Text h4>Inscription</Text>
    
    
      <Text style={{marginTop:20}} >Adresse e-mail</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setEmailSignUp(value)}
       value={emailSignUp}
     />
       <Text>Nom</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setLastNameSignUp(value)}
       value={lastNameSignUp}
     />
      <Text>N° de chambre</Text>
     <Input textAlign='center' keyboardType='numeric'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setRoomNumberSignUp(value)}
       value={roomNumberSignUp}
     />
    <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Question1');handleSubmitSignup()}} >
        <Text>Valider</Text>
      </TouchableOpacity>

  <Text>{listErrorsSignup}</Text>
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
    width: '40%' }
});
