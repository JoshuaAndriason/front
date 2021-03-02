import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HeaderScreen from './screens/HeaderScreen'
import ButtonValider from './components/ButtonValider';


export default function App(props) {
  return (
<>
<HeaderScreen/>
    <View style={styles.container}>
   <LoginScreen/>
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
