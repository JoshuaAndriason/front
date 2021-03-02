import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Signin from './screens/Signin';
import HeaderScreen from './screens/HeaderScreen'
import AccueilScreen from './screens/AccueilScreen'

const Stack = createStackNavigator();

export default function App(props) {
  return (
<>
<HeaderScreen/>
   <NavigationContainer >
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={AccueilScreen} />
       <Stack.Screen name="Signin" component={Signin} />
     </Stack.Navigator>
   </NavigationContainer>



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
