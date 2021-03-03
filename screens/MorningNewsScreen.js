import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import HomeImage from '../components/HomeImage'
import {connect} from 'react-redux';

function MorningNewsScreen(props) {

  const [sourceList, setSourceList] = useState([])

  useEffect(() => {
    const APIResultsLoading = async() => {
      const data = await fetch('https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=b32c8b844d1243b1a7998d8228910f50')
      const body = await data.json()
      setSourceList(body.sources)
    }

    APIResultsLoading()
  }, [])
  console.log(sourceList)

  return (
    <View >
      <HomeImage/>
{
    sourceList.map((l, i) => (
      <ListItem key={i} bottomDivider>

        <ListItem.Content >
          <ListItem.Title style = {{
    fontWeight:'bold',
    textDecorationLine:'underline'
  }} onPress={() => {props.onSubmitSource(l.id);props.navigation.navigate('Article')}}>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitSource: function(idArticle) { 
      dispatch( {type: 'saveId', idArticle: idArticle }) 
    }
  }
}
export default connect(
  null,mapDispatchToProps)(MorningNewsScreen)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
