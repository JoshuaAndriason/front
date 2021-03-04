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
    const [listErrorsSignup, setErrorsSignup] = useState([])

    var handleSubmitSignin = async () => {
 
      const data = await fetch('/sign-in', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `emailFromFront=${signInEmail}&nameFromFront=${signInName}&roomFromFront=${signInRoom}`
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
      return <Redirect to='/HomeScreen'/>
    }
  
    var tabErrorsSignin = listErrorsSignin.map((error,i) => {
      return(<Text>{error}</Text>)
    })
  
    var tabErrorsSignup = listErrorsSignup.map((error,i) => {
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
        onPress={() => {props.navigation.navigate("BottomNavigator"); handleSubmitSignin()}} >
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

 


