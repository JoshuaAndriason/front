import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

function BienvenueScreen(props) {
  const [isExist, setIsExist] = useState(false);
  const [localToken, setLocalToken] = useState("");

  useEffect(() => {
    // store token into localStorage
    AsyncStorage.getItem("token", (err, value) => {
      if (value) {
        setLocalToken(value);
        setIsExist(true);
        props.addToken(value);
      }
    });
  }, []);

  console.log("token Bienvenue local", localToken);
  console.log("im token Bienvenue", isExist);
  return (
    <ImageBackground
      source={{
        uri:
          "https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg",
      }}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // 
          isExist == true
            ? props.navigation.navigate("BottomNavigator")
            : props.navigation.navigate("Inscription");
        }}
      >
        <Text>BIENVENUE</Text>
      </TouchableOpacity>
      <Text h3 style={{ color: "white" }}>
        hy :{localToken}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("BottomNavigator");
        }}
      >
        <Text>Bienvenue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token: token });
    },
  };
}

export default connect(null, mapDispatchToProps)(BienvenueScreen);

const styles = StyleSheet.create({
  textBold: {
    marginTop: 100,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  textCenter: {
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#AADEC0",
    color: "white",
    padding: 15,
    borderColor: "black",
    borderWidth: 2,
    width: "40%",
  },
});
