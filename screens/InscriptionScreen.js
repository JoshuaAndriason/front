import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';

export function InscriptionScreen(props) {
    const [emailSignUp, setEmailSignUp] = useState();
    const [lastNameSignUp, setLastNameSignUp] = useState();
    const [roomNumberSignUp, setRoomNumberSignUp] = useState();
    const [isInscription,setIsInscription] = useState(true);

    const [signInEmail, setSignInEmail] = useState('')
    const [signInName, setSignInName] = useState('')
    const [signInRoom, setSignInRoom] = useState('')
    const [localToken, setLocalToken] = useState('')


    const [userExists, setUserExists] = useState(false)
    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [listErrorsSignup, setErrorsSignup] = useState([])
   


    useEffect(() => {
      AsyncStorage.getItem('pseudo', (err, value) => {
        if (value) {
          setPseudo(value);
          setPseudoIsSubmited(true);
        }
      });
    }, []);
  

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
      props.navigation.navigate('BottomNavigator');
      } else {
      setErrorsSignup(body.error)


      
    } 
    setLocalToken(body.token)
    AsyncStorage.setItem('token',localToken)}

    var handleSubmitSignin = async () => {
 
      const data = await fetch('http://172.17.1.186:3000/sign-in', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `emailFromFront=${signInEmail}&lastnameFromFront=${signInName}&roomNumberFromFront=${signInRoom}`
      })
  
      const body = await data.json()


      if(body.result == true){
        props.addToken(body.token)
        setUserExists(true)
      }  else {
        setErrorsSignin(body.error)
      }
    }
      if(userExists){
        props.navigation.navigate("BottomNavigator")
      }



     
    
  return (
    <View style={styles.container}>
    
    <HomeImage/>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {setIsInscription(true)}} >
      <Text>Inscription</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {setIsInscription(false)}} >
      <Text>Connexion</Text>
    </TouchableOpacity>

    {isInscription?<><Text h4>Inscription</Text>
    
    
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
      onPress={() => {handleSubmitSignup()}} >
      <Text>Valider</Text>
    </TouchableOpacity>

<Text>{listErrorsSignup}</Text></> : <><Text h4>Connexion</Text>
    
    
    <Text style={{marginTop:20}} >Adresse e-mail</Text>
   <Input textAlign='center'
    containerStyle = {{marginBottom: 5, width: '55%'}}
     onChangeText={(value) => setSignInEmail(value)}
     value={signInEmail}
   />
     <Text>Nom</Text>
   <Input textAlign='center'
    containerStyle = {{marginBottom: 5, width: '55%'}}
     onChangeText={(value) => setSignInName(value)}
     value={signInName}
   />
    <Text>N° de chambre</Text>
   <Input textAlign='center' keyboardType='numeric'
    containerStyle = {{marginBottom: 5, width: '55%'}}
     onChangeText={(value) => setSignInRoom(value)}
     value={signInRoom}
   />
  <TouchableOpacity
      style={styles.button}
      onPress={() => {handleSubmitSignin()}} >
      <Text>Valider</Text>
    </TouchableOpacity>

<Text>{listErrorsSignup}</Text></>}

    
</View>
   
  );
}
function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(InscriptionScreen)


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
