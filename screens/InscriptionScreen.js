import React, {useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function InscriptionScreen(props) {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [room, setRoom] = useState();

  return (
   
    <View style={styles.container}>
    
    <HomeImage/>
    <Text h4>Inscription</Text>
    
    
      <Text style={{marginTop:20}} >Adresse e-mail</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setEmail(value)}
       value={email}
     />
       <Text>Nom</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setName(value)}
       value={name}
     />
      <Text>N° de chambre</Text>
     <Input textAlign='center' keyboardType='numeric'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setRoom(value)}
       value={room}
     />
    <TouchableOpacity
        style={styles.button}
        onPress={() => {props.navigation.navigate('Question1')}} >
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