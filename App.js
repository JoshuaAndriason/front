import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderScreen from './screens/HeaderScreen'
import BienvenueScreen from './screens/BienvenueScreen'
import LoginScreen from './screens/LoginScreen'
import ButtonValider from './components/ButtonValider';

const Stack = createStackNavigator();

export default function App(props) {
  return (
<>
<HeaderScreen/>
   <NavigationContainer >
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={BienvenueScreen} />
       <Stack.Screen name="Signin" component={LoginScreen} />
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
