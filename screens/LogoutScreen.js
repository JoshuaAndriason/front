import React, { useEffect } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LogoutScreen(props) {
  // destruction du token de l'AsyncStorage pour se log-out
  useEffect(() => {
    AsyncStorage.clear();
    
    //navigation vers Inscription sans passer par log-out
    props.navigation.replace("Inscription");
  }, []);

  return (
    <ImageBackground
      source={{
        uri:
          "https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg",
      }}
      style={styles.container}
    >
      <Text style={styles.text}>
        Vous êtes en cours de déconnexion, à très bientot.{" "}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    color: "white",
    textAlign: "center",
    fontSize: 25,
    marginTop: 80,
  },
  container: {
    flex: 1,
  },
});
