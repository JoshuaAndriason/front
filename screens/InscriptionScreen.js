import React, { useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import AsyncStorage from '@react-native-async-storage/async-storage';
//SCROLLER LES INPUTS A L'AFFICHAGE D'UN KEYBOARD//
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IPadress from "../url";
import {connect} from 'react-redux';


export function InscriptionScreen(props) {

//DECLARATION DES ETATS DE SIGNUP//
    const [emailSignUp, setEmailSignUp] = useState();
    const [lastNameSignUp, setLastNameSignUp] = useState();
    const [roomNumberSignUp, setRoomNumberSignUp] = useState();


    //DECLARATION DES ETATS DE SIGNIN//
    const [signInEmail, setSignInEmail] = useState('')
    const [signInName, setSignInName] = useState("")
    const [signInRoom, setSignInRoom] = useState("")


    const [isInscription,setIsInscription] = useState(true);

    //DECLARATION DES ETATS DE MESSAGE D'ERREUR//
    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [listErrorsSignup, setErrorsSignup] = useState([])

   
//FONCTION SIGNUP//
    var handleSubmitSignup = async () => {

      //ENVOIE DES INFOS AU BACK POUR INSCRIPTION D'UN USER//
      const data = await fetch(`http://${IPadress}/sign-up`, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `lastnameFromFront=${lastNameSignUp}&emailFromFront=${emailSignUp}&roomNumberFromFront=${roomNumberSignUp}&token=`
      })
      const body = await data.json()
      

     if(body.result == true){
       //ENREGISTREMENT DU TOKEN DANS UN REDUCER//
      props.addToken(body.token)
//LOCAL STORAGE DU TOKEN//
      AsyncStorage.setItem('token', body.token);
      //NAVIGATION VERS LA QUESTION 1//
      props.navigation.navigate('Question1');
      } else {

      //MESSAGE D'ERREU SIGNUP//
      setErrorsSignup(body.error)
    } 
  }

//FONCTION SIGNIN//
    var handleSubmitSignin = async () => {
       //ENVOIE DES INFOS AU BACK POUR VERIFICATION SI USER DEJA EXISTANT//

      const data = await fetch(`http://${IPadress}/sign-in`, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `emailFromFront=${signInEmail}&lastnameFromFront=${signInName}&roomNumberFromFront=${signInRoom}`
      })
  
      const body = await data.json()


      if(body.result == true){
         //ENREGISTREMENT DU TOKEN DANS UN REDUCER//
        props.addToken(body.token)
        //NAVIGATION VERS LA HOME PAGE//
        props.navigation.navigate("BottomNavigator")
        //LOCAL STORAGE DU TOKEN//
        AsyncStorage.setItem('token', body.token);
        
      }  else {
              //MESSAGE D'ERREU SIGNUP//

        setErrorsSignin(body.error)      
      }
    }

//GESTION DU STYLE DE L'ONGLET INSCRIPTION/CONNEXION//

var backGroundInscription =''
var backGroundConnexion =''
    if(isInscription){

      //AU CLIC INSCRIPTION CHANGEMENT DEFINIR UN BACKGROUND COLOR VERT ET CONNEXION BLANC//

     backGroundInscription = { alignItems: "center",padding: 10,width: '50%',fontWeight: 'bold',marginBottom: 20,borderColor: '#AADEC0',borderBottomWidth: 2,backgroundColor:'#AADEC0'}
     backGroundConnexion ={ alignItems: "center",padding: 10,width: '50%',fontWeight: 'bold',marginBottom: 20,borderColor: '#AADEC0',borderBottomWidth: 2}
    }else{
      //AU CLIC CONNEXION CHANGEMENT DEFINIR UN BACKGROUND COLOR VERT ET INSCRIPTION BLANC//
      backGroundConnexion = { alignItems: "center",padding: 10,width: '50%',fontWeight: 'bold',marginBottom: 20,borderColor: '#AADEC0',borderBottomWidth: 2,backgroundColor:'#AADEC0'}
      backGroundInscription ={ alignItems: "center",padding: 10,width: '50%',fontWeight: 'bold',marginBottom: 20,borderColor: '#AADEC0',borderBottomWidth: 2}
    }
     
    
  return (
    <View style={styles.container}>
    
    <HomeImage/>
    
    <View>
    <View style={{ flexDirection: 'row',borderColor:'black'}}>
      <TouchableOpacity
      style={ backGroundInscription}
      onPress={() => {setIsInscription(true)}} >
      <Text style={styles.textLogin}>Inscription</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={backGroundConnexion}
      onPress={() => {setIsInscription(false)}} >
      <Text style={styles.textLogin}>Connexion</Text>
    </TouchableOpacity>
    </View>

      </View> 

     
      <KeyboardAwareScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>

     { /*TERNAIRE QUI GERE L'AFFICHAGE DES INFOS SELON L'ONGLET CLIKER (INFOS INSCRIPTION OU CONNEXION)*/ }

    {isInscription?<><Text style={styles.textLogin}>Inscription</Text>
    
    
    <Text style={{marginTop:20}} >Adresse e-mail</Text>
   <Input textAlign='center' placeholder='email@email.com'
    containerStyle = {{marginBottom: 5, width: '60%'}}
     onChangeText={(value) => setEmailSignUp(value)}
     value={emailSignUp}
   />
     <Text>Nom</Text>
   <Input textAlign='center' placeholder='Prénom'
    containerStyle = {{marginBottom: 5, width: '60%'}}
     onChangeText={(value) => setLastNameSignUp(value)}
     value={lastNameSignUp}
   />
    <Text>N° de chambre</Text>
   <Input textAlign='center' keyboardType='numeric' keyboardType='numbers-and-punctuation' placeholder='55'
    containerStyle = {{marginBottom: 5, width: '25%'}}
     onChangeText={(value) => setRoomNumberSignUp(value)}
     value={roomNumberSignUp}
   />
  <TouchableOpacity
      style={styles.button}
      onPress={() => {handleSubmitSignup()}} >
      <Text>Valider</Text>
    </TouchableOpacity>

    { /*AFFICHAGE DES ERREURS SIGNUP*/ }

<Text>{listErrorsSignup}</Text></> 

: <>
<Text style={styles.textLogin}>Connexion</Text>

    
    
    <Text style={{marginTop:20}} >Adresse e-mail</Text>
   <Input textAlign='center' placeholder='email@email.com'
    containerStyle = {{marginBottom: 5, width: '60%'}}
     onChangeText={(value) => setSignInEmail(value)}
     value={signInEmail}
   />
     <Text>Nom</Text>
   <Input textAlign='center' placeholder='Prénom' 
    containerStyle = {{marginBottom: 5, width: '60%'}}
     onChangeText={(value) => setSignInName(value)}
     value={signInName}
   />
    <Text>N° de chambre</Text>
   <Input textAlign='center' keyboardType='numeric' keyboardType='numbers-and-punctuation' placeholder='55'
    containerStyle = {{marginBottom: 5, width: '25%'}}
     onChangeText={(value) => setSignInRoom(value)}
     value={signInRoom}
   />
  <TouchableOpacity
      style={styles.button}
      onPress={() => {handleSubmitSignin()}} >
      <Text>Valider</Text>
    </TouchableOpacity>
    { /*AFFICHAGE DES ERREURS SIGNIN*/ }
    <Text style={styles.textError}>{listErrorsSignin}</Text>

</>}



</KeyboardAwareScrollView>
</View>
   
  );
}
function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      console.log('function addToken :',token)
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
    width: '35%' 
  },box:{
    width:'40%',
    padding:5,
    margin:3,
     borderWidth: 2,
      borderColor:'#AADEC0'
  },inner:{
      alignItems: 'center',
      justifyContent:'center'

  },text:{
    padding:5,
      alignItems: 'center',
      alignContent:'center',
      justifyContent:'center',
      margin:10,
  },onglet:{
      alignItems: "center",
      padding: 10,
      width: '50%',
      fontWeight: 'bold',
      marginBottom: 20,
      borderColor: '#AADEC0',
      borderBottomWidth: 2,
   },textLogin:{
    fontSize:18,
    fontWeight:'bold'
  },title:{
    color:'#AADEC0',
    fontSize:18,
    fontWeight:'bold'
  }, textError:{
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'center',
    fontSize:18,
    color:'#AADEC0',
  }
});
