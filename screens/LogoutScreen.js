import React, { useState,useEffect } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux'



function LogoutScreen(props) {
const [localToken, setLocalToken] = useState('')

useEffect(() => {
  AsyncStorage.getItem('token', ( value) => {
    if (value) {
      setLocalToken(value);
    
    }
  });
}, []);

console.log('Local storage :',localToken)
console.log('REDUCER :',props.token)
    return (

      
      <ImageBackground source={{uri: 'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg'}} style={styles.container}>
        
    <Text h3 style={{color:'white'}}>TOKEN :{localToken} et le PROPS : {props.token}</Text>

</ImageBackground>
  );
 }

 function mapStateToProps(state){
  return {token:state.token}
}  
export default connect(
  mapStateToProps
)(LogoutScreen)


 const styles =StyleSheet.create({
  textBold:{
    marginTop: 100,fontWeight:'bold',textAlign:'center',marginBottom:50
  },textCenter:{
    textAlign:'center'
  }, container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    color:'white',
    padding: 15,
    borderColor: 'black',
    borderWidth: 2,
    width: '40%'
   }
})
