import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, Image} from 'react-native-elements';



export default function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [room, setRoom] = useState();

  return (
   
    <View style={styles.container}>
    


        <View style= {{width : '100%'}}>
         <Image source={{url: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg'}}
         style ={{ width : '100%', height: 200, marginBottom:50 }}
         />
        </View>
    
    <Text h4>CONNEXION</Text>

      <Text style={{marginTop:20}}>Adresse e-mail</Text>
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
     <Input textAlign='center'
      containerStyle = {{marginBottom: 5, width: '55%'}}
       onChangeText={(value) => setRoom(value)}
       value={room}
     />
     <TouchableOpacity
          style={styles.button}
          onPress={()=>console.log(email, name, room)}>
          <Text style={{color: 'white'}}>Valider</Text>
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

 


