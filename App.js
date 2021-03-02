import React from 'react';
import { StyleSheet, View } from 'react-native';
import Signin from './screens/Signin';
import HeaderScreen from './screens/HeaderScreen';


export default function App(props) {
  return (
<>
<HeaderScreen/>
    <View style={styles.container}>
   <Signin/>
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
