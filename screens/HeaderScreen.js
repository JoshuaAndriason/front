import React from 'react';
import {View,StyleSheet,Image} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import  Constant  from 'expo-constants'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function HeaderScreen(){
    return(
        <View style={{marginTop: Constant.statusBarHeight,height:60,backgroundColor:"#AADEC0",flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
        <View ><MaterialCommunityIcons name="menu" size={24} color="white" /></View>
        <View  ><Image
      source={{ uri:  'https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590242/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/LOGO_DEUX_ILES_RVB_hk4avh.png'}}
      style={{ width: 92, height: 50, }}
    />
    </View>
        <View style={{}}><FontAwesome name="user-circle" size={24} color="white" /></View>
    
    </View>



    )
}
const styles =StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
    }
})