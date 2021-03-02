import React from 'react';
import { View, Image } from 'react-native';


export default function HomeImage(props) {
  console.log(props.url);

  return (
    <View style={{ width: '100%' }}>
      <Image source={{ uri: props.url }} style={{ width: '100%', height: 180, marginBottom: 20 }} />
    </View>
  )
};