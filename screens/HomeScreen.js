import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image,TouchableOpacity } from 'react-native';
import { Input, Text } from 'react-native-elements';
import HeaderScreen from './HeaderScreen'
import HomeImage from "../components/HomeImage"



export default function HomeScreen(props) {
    return (
        <>
            <View style={{ width: '100%' }}>
                <HomeImage url={"https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg"} />
                
                </View>

                <ScrollView style={{ width: '100%' }}>


                    <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", marginRight: 10 }}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1614643738701-b3e3b4245dbc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 150, marginBottom: 10 }}  />

                        <Image source={{ uri: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '48%', height: 200, marginBottom: 10, marginRight: 10 }}  />

                        <Image source={{ uri: "https://images.unsplash.com/photo-1611095973763-414019e72400?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '48%', height: 200 }} />



                        <Image source={{ uri: "https://images.unsplash.com/photo-1614622686704-f24cdef196a0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '48%', height: 200, marginBottom: 10, marginRight: 10 }} />

                        <Image source={{ uri: "https://images.unsplash.com/photo-1612831200091-c08595b18e6b?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '48%', height: 200 }} />


                    </View>
                </ScrollView>

          



        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      flexDirection: 'column',
      textAlign: 'left'
    },
    button: {
      borderColor : "#AADEC0",
        borderWidth:0.5,
      padding: 10,
      width: '90%',
      marginBottom : 20
},
      text: { color: 'black',
      fontSize:18,
      textAlign: 'left'
    },
     
  });