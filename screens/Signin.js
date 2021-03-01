import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Text, Image} from 'react-native-elements';


function Signin(props) {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [room, setRoom] = useState();

  return (
   
    <View style={styles.container}>
    


        <View style= {{width : '100%'}}>
         <Image source={{url: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg'}}
         style ={{ width : '100%', height: 200, padding: 0, objectFit: 'fill' }}
         />
    </View>
    <View style={styles.imagecontainer}>
    <Text h4
    containerStyle = {{marginBottom: 70}}
   >CONNEXION</Text>


      <Text>Adresse e-mail</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 10, width: '55%'}}
       onChangeText={(value) => setEmail(value)}
       value={email}
     />
       <Text>Nom</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 10, width: '55%'}}
       onChangeText={(value) => setName(value)}
       value={name}
     />
      <Text>N° de chambre</Text>
     <Input textAlign='center'
      containerStyle = {{marginBottom: 10, width: '55%'}}
       onChangeText={(value) => setRoom(value)}
       value={room}
     />
    
     <Button
  title="Valider"
  type="outline"
  onPress={()=>console.log(email, name, room)}
/>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  }
});

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    
    },
  });
export default Signin;


