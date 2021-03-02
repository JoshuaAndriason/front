import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Input}  from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function MenuScreen(props) {
    const [email, setEmail] = useState();
    return (
 <View style= {{width : '100%'}}>

<HomeImage/>

<Text style={styles.texts}>Menu Petit-Déjeuner</Text>

<View style={styles.container}>

<View style={{marginLeft:5}}>
<Button
  icon={
    <Icon
      name="check-circle"
      size={25}
      color="grey"
    />
  }
type="clear"/> 
<Text style={{marginTop:-5}}>Sur Place</Text>
</View>

<View style={{margin:15}}>
<Button
  icon={
    <Icon
      name="check-circle"
      size={25}
      color="grey"
    />
  }
type="clear"/> 
<Text style={{marginTop:-5}}>En Chambre</Text>
</View>
<View style={{flexDirection:'row', justifyContent:'flex-end'}}>

<Input justifyContent='left' placeholder='Heure'
      containerStyle = {{marginBottom: 5, width:'50%'}}
       onChangeText={(value) => setEmail(value)}
       value={email}
     />
     <Text style={{marginTop:-5}}>Sur Place</Text>
</View>



</View>
</View>

  )};

  const styles = StyleSheet.create({
    texts: {
    textAlign:'center',
    fontSize:25,
    paddingBottom:1
    },
    container :{
    alignItems:'center',
   flexDirection: 'row',
    }
})