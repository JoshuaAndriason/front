import React from 'react';
import {View,StyleSheet} from 'react-native';
import AcceuilScreen from './screens/AcceuilScreen';
import HeaderScreen from './screens/HeaderScreen';







export default function App() {
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
