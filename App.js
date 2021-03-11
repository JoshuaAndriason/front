import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

// MASQUER LES WARNINGS MESSAGES
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

// IMPORT SCREEN
import HeaderScreen from "./screens/HeaderScreen";
import BienvenueScreen from "./screens/BienvenueScreen";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import ChatScreen from "./screens/ChatScreen";
import MorningNewsScreen from "./screens/MorningNewsScreen";
import ArticleNews from "./screens/ArticleNews";
import OrderScreen from "./screens/OrderScreen";
import ServiceScreen from "./screens/ServiceScreen";
import EventScreen from "./screens/EventScreen";
import RestaurationScreen from "./screens/RestaurationScreen";
import RoomDirectoryScreen from "./screens/RoomDirectoryScreen";
import RoomDirectoryDetailScreen from "./screens/RoomDirectoryDetailScreen";
import RoomDirectoryBadgeScreen from "./screens/RoomDirectoryBadgeScreen";
import Question1Screen from "./screens/Question1Screen";
import Question2Screen from "./screens/Question2Screen";
import Question3Screen from "./screens/Question3Screen";
import RecommendationScreen from "./screens/RecommendationScreen";
import MenuScreen from "./screens/MenuScreen";
import InscriptionScreen from "./screens/InscriptionScreen";
import DetailRecommendationScreen from "./screens/DetailRecommendationScreen";
import EventScreenDetails from "./screens/EventScreenDetails";
import aLaCarteMenuScreen from "./screens/aLaCarteMenuScreen";
import LogoutScreen from "./screens/LogoutScreen";

// IMPORT REDUCER
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import idArticle from "./reducers/idArticle";
import idEvent from "./reducers/idEvent";
import idOrder from "./reducers/idOrder";
import token from "./reducers/token";
import letterRoomDirectory from "./reducers/letterRoomDirectory";
import badgeRoomDirectory from "./reducers/badgeRoomDirectory";




// DECLARATION STORE,STACK,Tab
const store = createStore(
  combineReducers({ idArticle, token, letterRoomDirectory, idEvent,badgeRoomDirectory,idOrder })
);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//FUNCTION BOTTOM NAVIGATION
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = "home";} 
            else if (route.name == "Account") {
              iconName = "user";
          } else if (route.name == "Contact") {
            iconName = "envelope";
          } else if (route.name =="Logout") {
            iconName = "sign-out"
          }

      return <FontAwesome name={iconName} size={25} color={color}/>;
    },
  })}
  tabBarOptions={{
    activeTintColor: "#e4605e",
    inactiveTintColor: "#FFFFFF",
    style: {
      backgroundColor: "#AADEC0",
      height:65,
      width:'100%'    
    },
  }}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Account" component={AccountScreen} />
  <Tab.Screen name="Contact" component={ChatScreen} />
  <Tab.Screen name="Logout" component={LogoutScreen} options={{tabBarVisible:false}}   
  options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
</Tab.Navigator>
  );
};

//FUNCTION APP.JS
export default function App(props) {
  return (
    <Provider store={store}>
      <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => <HeaderScreen /> }}>
            <Stack.Screen name="Bienvenue" component={BienvenueScreen} 
            options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
            <Stack.Screen name="Inscription" component={InscriptionScreen} 
              options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} 
            options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
            <Stack.Screen name="Question1" component={Question1Screen}
              options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
            <Stack.Screen name="Question2" component={Question2Screen}
              options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
            <Stack.Screen name="Question3" component={Question3Screen}
              options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
               <Stack.Screen name="Home" component={HomeScreen} 
            options={{ header: () => <HeaderScreen showButtons={false} /> }}/>
            <Stack.Screen name="Restauration" component={RestaurationScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Article" component={ArticleNews} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="morningNews" component={MorningNewsScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
            <Stack.Screen name="EventDetails" component={EventScreenDetails} />
            <Stack.Screen name="Service" component={ServiceScreen} />
            <Stack.Screen name="RoomDirectory" component={RoomDirectoryScreen}/>
            <Stack.Screen name="RoomDirectoryDetail" component={RoomDirectoryDetailScreen} />
            <Stack.Screen name="RoomDirectoryBadge" component={RoomDirectoryBadgeScreen} />
            <Stack.Screen name="Recommendation" component={RecommendationScreen} />
            <Stack.Screen name="DetailRecommendation" component={DetailRecommendationScreen} />
            <Stack.Screen name="aLaCarte" component={aLaCarteMenuScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
           
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});