import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {Text, Button, Input, Overlay, ListItem, Avatar}  from 'react-native-elements';
import HomeImage from '../components/HomeImage'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Accordion, List } from 'antd-mobile';



export default function MenuScreen(props) {
    
        const [visible, setVisible] = useState(false);
      
        const toggleOverlay = () => {
          setVisible(!visible);
        };

    const [heure, setHeure] = useState(':');

    const list = [
        {name: 'Croissant'},
        {name: 'Café'},
        {name: 'Omelette'},
        {name: 'Oeuf au plat'}
    ]
  
  
    return (
        <View style={styles.container}>

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
      color="#AADEC0"
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
      color="#AADEC0"
    />
  }
type="clear"/> 
<Text style={{marginTop:-5}}>En Chambre</Text>
</View>
 
 <View style={{marginLeft:100, alignItems:'center'}}>
     
<TextInput
      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign:'center'}}
      onChangeText={e => setHeure(e)}
      value={heure}
    />
    <Text>Heure</Text>
</View>
</View>
 
<ScrollView style={{flex:1, width:"100%"}}>
      <View style={styles.block}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('{props.navigation.navigate()}')}>
          <Text style={styles.text}>Petit déjeuner</Text>
        </TouchableOpacity>
        <View style={{flex:1, width:"100%", alignItems: "center"}}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => console.log('{props.navigation.navigate()}')}>
            <Text style={styles.text}>Continental (jus de fruit...)</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.list}
            onPress={toggleOverlay}>
            <Text style={styles.text}>Bien-être</Text>
           
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.listOverlay}> 
            <Text>Merci de préciser votre choix:</Text>
            {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Button onPress={() => console.log(l.name)}></Button> 
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }
            </View>
      </Overlay>
 
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.block}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('{props.navigation.navigate()}')}>
          <Text style={styles.text}>Flâneries</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>

</View>

  )};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderColor: "blue",
      borderWidth: 2,
      width: '100%',
      flexDirection: 'column',
      textAlign: 'left'
    },
    block: {
      borderColor: "red",
      borderWidth: 2,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'flex-start',
      width: '100%',
      flexDirection: 'column',
      textAlign: 'left',
      height: "auto"
    },
    button: {
      borderColor: "#AADEC0",
      borderWidth: 0.5,
      padding: 10,
      width: '95%',
    },
    text: {
      color: 'black',
      fontSize: 18,
      textAlign: 'left'
    },
    list: {
      //display: "none",
      backgroundColor:"#AADEC0",
      borderColor: "#AADEC0",
      borderWidth: 0.5,
      padding: 10,
      width: '88%',
      marginBottom: 5
    }, 
    texts: {
        textAlign:'center',
        fontSize:25,
        paddingBottom:1
        },
    listOverlay:{
        backgroundColor: '#fff',
        borderColor: "blue",
        borderWidth: 2,
        textAlign: 'left'
        
    }
  });