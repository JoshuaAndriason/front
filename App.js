import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HeaderScreen from './screens/HeaderScreen'
import BienvenueScreen from './screens/BienvenueScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import AccountScreen from './screens/AccountScreen'
import ChatScreen from './screens/ChatScreen'
import OrderScreen from './screens/OrderScreen'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = 'home';
          } else if(route.name == 'Chat'){
            iconName = 'envelope';
          } else if (route.name == 'Account') {
            iconName = 'user';
          }
  
          return <FontAwesome name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#e4605e',
        inactiveTintColor: '#FFFFFF',
        style: {
          backgroundColor: '#AADEC0',
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />

    </Tab.Navigator>
  );
}





export default function App(props) {
  return (
<>
<HeaderScreen/>
   <NavigationContainer >
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Bienvenue" component={BienvenueScreen} />
       <Stack.Screen name="Signin" component={LoginScreen} />
       <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
       <Stack.Screen name="Order" component={OrderScreen} />

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
