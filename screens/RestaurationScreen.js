import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import HomeImage from '../components/HomeImage'



export default function RestaurationScreen(props) {
    return(
        <View style={styles.container}>
        <HomeImage/>
    <TouchableOpacity
        style={styles.button}
        onPress={()=>console.log('{props.navigation.navigate()}')}>
        <Text style={styles.text}>Petit Déjeuner</Text>
 </TouchableOpacity>

        <TouchableOpacity
style={styles.button}
onPress={()=>console.log('{props.navigation.navigate()}')}>
<Text style={styles.text}>Dîner</Text>
        </TouchableOpacity>

    <TouchableOpacity
          style={styles.button}
          onPress={()=>console.log('{props.navigation.navigate()}')}>
          <Text style={styles.text}>Snack</Text>
   </TouchableOpacity>

   <TouchableOpacity
          style={styles.button}
          onPress={()=>console.log('{props.navigation.navigate()}')}>
          <Text style={styles.text}>Célébrations Personnelles</Text>
   </TouchableOpacity>


    </View>

    )};
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