import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Text, Button, Input}  from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Accordion, List } from 'antd-mobile';



export default function MenuScreen(props) {
   
    const [heure, setHeure] = useState('');
    const [email, setEmail] = useState();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showTimepicker = () => {
      showMode('time');
      console.log(date);
    };
    return (
 <View style= {{width : '100%'}}>

<HomeImage/>

<Text style={styles.texts}>Menu Petit-Déjeuner</Text>

<View style={{alignItems:'center',
   flexDirection: 'row',}}>

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
 
 <View style={{marginLeft:100, alignItems:'center'}}>
     
<TextInput
      style={{ height: 30, borderColor: 'gray', borderWidth: 1, width: 80}}
      onChangeText={e => setHeure(e)}
      value={heure}
    />
    <Text>Heure</Text>
</View>
</View>
 
 <View style={{alignItems:'center'}}>
<TouchableOpacity
style={styles.button}
onPress={()=>console.log('{props.navigation.navigate()}')}>
<Text style={styles.text}>Dîner</Text>
        </TouchableOpacity>

        <View>
        <TouchableOpacity
style={styles.button}
onPress={()=>console.log('{props.navigation.navigate()}')}>
<Text style={styles.text}>Dîner</Text>
        </TouchableOpacity>
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
        width: '95%',
       
  },
        text: { color: 'black',
        fontSize:18,
        textAlign: 'left'
      },
})