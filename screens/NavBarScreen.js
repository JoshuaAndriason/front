import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Icon } from "react-native-elements";
import Constant from "expo-constants";
import { useNavigation } from "@react-navigation/native";

export default function HeaderScreen({ showButtons = true }) {
  const navigation = useNavigation();
  return (
      <>
    {showButtons && (
    <View
      style={{width: "100%",
        height: 60,
        backgroundColor: "#AADEC0",
        flexDirection: "row",
        justifyContent: showButtons ? "space-between" : "center",
        alignItems: "flex-end",
      }}
    >
      
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          type="clear"
          icon={<Icon name="undo" size={30} color="white" />}
        />

      <View>
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590242/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/LOGO_DEUX_ILES_RVB_hk4avh.png",
          }}
          style={{ width: 92, height: 50 }}
        />
      </View>
      
        <Button
          onPress={() => {
            navigation.navigate("BottomNavigator");
          }}
          type="clear"
          icon={<Icon name="home" size={30} color="white" />}
        />
      
    </View>
        )}
        </>
  );
};
