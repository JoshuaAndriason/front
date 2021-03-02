import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

export default function morningNews(props) {

  const [sourceList, setSourceList] = useState([])
  const [selectedLang, setSelectedLang] = useState(props.selectedLang)


  useEffect(() => {
    const APIResultsLoading = async() => {
      const data = await fetch(`https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=b32c8b844d1243b1a7998d8228910f50`)
      const body = await data.json()
      console.log(body);
      setSourceList(body.sources)
    }

    APIResultsLoading()
  }, [])

  return (
    <View style={styles.container}>
{
    sourceList.map((l, i) => (
      <ListItem key={i} bottomDivider>
        
        <ListItem.Content>
          <ListItem.Title>{l.category}</ListItem.Title>
          <ListItem.Subtitle>{l.country}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
  

</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

