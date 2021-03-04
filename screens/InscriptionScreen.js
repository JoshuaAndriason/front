import React, {useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function InscriptionScreen(props) {
    const [emailSignUp, setEmailSignUp] = useState();
    const [lastNameSignUp, setLastNameSignUp] = useState();
    const [roomNumberSignUp, setRoomNumberSignUp] = useState();
    const [isInscription,setIsInscription] = useState(false);
    const [isConnexion,setIsConnexion] = useState(false);


    const [signInEmail, setSignInEmail] = useState('')
    const [signInName, setSignInName] = useState('')
    const [signInRoom, setSignInRoom] = useState('')

    const [userExists, setUserExists] = useState(false)
    const [listErrorsSignin, setErrorsSignin] = useState([])
    const [listErrorsSignup, setErrorsSignup] = useState([])

    var handleSubmitSignup = async () => {
    
    
      const data = await fetch('http://172.17.1.187:3000/sign-up', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `lastnameFromFront=${lastNameSignUp}&emailFromFront=${emailSignUp}&roomNumberFromFront=${roomNumberSignUp}`
      })
  
      const body = await data.json()
     console.log(body)
     if(body.result == true){
      setUserExists(true)
      props.navigation.navigate('BottomNavigator');
      } else {
      setErrorsSignup(body.error)



      var handleSubmitSignin = async () => {
 
        const data = await fetch('http://172.17.1.187:3000/sign-in', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `emailFromFront=${signInEmail}&lastnameFromFront=${signInName}&roomNumberFromFront=${signInRoom}`
        })
        const body = await data.json()
        if(body.result == true){
          setUserExists(true)
        }  else {
          setErrorsSignin(body.error)
        }
      }
      if(userExists){
        props.navigation.navigate("BottomNavigator")
      }
      var tabErrorsSignin = listErrorsSignin.map((error,i) => {
        return(<Text>{error}</Text>)
      })
      }
    }
  return (
    <View style={styles.container}>
    
    <HomeImage/>
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

<Text>{listErrorsSignup}</Text></> : null}


{isConnexion?<><Text h4>Inscription</Text>
    
    
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

<Text>{listErrorsSignup}</Text></> : null}





    
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
