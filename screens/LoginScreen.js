import React, {useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import HomeImage from '../components/HomeImage'


export default function LoginScreen(props) {
    

    const [signInEmail, setSignInEmail] = useState('')
    const [signInName, setSignInName] = useState('')
    const [signInRoom, setSignInRoom] = useState('')

    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignin, setErrorsSignin] = useState([])
    

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
  
  
  

  return (
   
    <View style={styles.container}>
    
    <HomeImage/>
    <Text h4>CONNEXION</Text>
   
 
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

 


