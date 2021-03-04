import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';


// IMPORT SCREEN 
import HeaderScreen from './screens/HeaderScreen'
import BienvenueScreen from './screens/BienvenueScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import AccountScreen from './screens/AccountScreen'
import ChatScreen from './screens/ChatScreen'
import MorningNewsScreen from './screens/MorningNewsScreen'
import ArticleNews from './screens/ArticleNews'
import OrderScreen from './screens/OrderScreen'
import ServiceScreen from './screens/ServiceScreen'
import EventScreen from './screens/EventScreen'
import RestaurationScreen from './screens/RestaurationScreen'
import RoomDirectoryScreen from './screens/RoomDirectoryScreen'
import Question1Screen from './screens/Question1Screen'
import Question2Screen  from './screens/Question2Screen'
import Question3Screen from './screens/Question3Screen'
import RecommendationScreen from './screens/RecommendationScreen';

// IMPORT REDUCER 
import MenuScreen from './screens/MenuScreen'
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import idArticle from './reducers/idArticle';
import DetailRecommendationScreen from './screens/DetailRecommendationScreen';
const store = createStore(combineReducers({idArticle}));
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//FUNCTION BOTTOM NAVIGATION
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

//FUNCTION BOTTOM NAVIGATION
export default function App(props) {
  return (
    <Provider store={store}>
<>
<HeaderScreen/>
   <NavigationContainer >
     <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="Bienvenue" component={BienvenueScreen} />
       <Stack.Screen name="Signin" component={LoginScreen} />
       <Stack.Screen name="Question1" component={Question1Screen} />
       <Stack.Screen name="Question2" component={Question2Screen} />
       <Stack.Screen name="Question3" component={Question3Screen} />

       <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
       <Stack.Screen name="Article" component={ArticleNews} />
       <Stack.Screen name="Order" component={OrderScreen} />
       <Stack.Screen name="morningNews" component={MorningNewsScreen} />
       <Stack.Screen name="Event" component={EventScreen} />
       <Stack.Screen name="Service" component={ServiceScreen} />
       <Stack.Screen name="Restauration" component={RestaurationScreen} />
       <Stack.Screen name="RoomDirectory" component={RoomDirectoryScreen} />
       <Stack.Screen name="Menu" component={MenuScreen} />
       <Stack.Screen name="Recommendation" component={RecommendationScreen} />
       <Stack.Screen name="DetailRecommendation" component={DetailRecommendationScreen} />

     </Stack.Navigator>
   </NavigationContainer>
    </>
    </Provider>
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