import React from 'react';
import { StyleSheet, View } from 'react-native';
import Signin from './screens/Signin';

export default function App(props) {
  return (
<>
<HeaderScreen/>
    <View style={styles.container}>
    
      <AcceuilScreen/>
    </View>
    </>
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
