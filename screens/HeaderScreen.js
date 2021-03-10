import React from "react";
import { View, StyleSheet, Image} from "react-native";
import { Button} from "react-native-elements";
import Constant from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HeaderScreen({ showButtons = true }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        width: "100%",
        height: 60,
        backgroundColor: "#AADEC0",
        flexDirection: "row",
        justifyContent: showButtons ? "space-between" : "center",
        alignItems: "center",
      }}
    >
      {showButtons && (
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          type="clear"
          icon={<Icon name="chevron-left" size={25} color="white" />}
        />
      )}
      <View>
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590242/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/LOGO_DEUX_ILES_RVB_hk4avh.png",
          }}
          style={{ width: 92, height: 50 }}
        />
      </View>
      {showButtons && (
        <Button
          onPress={() => {
            navigation.navigate("BottomNavigator");
          }}
          type="clear"
          icon={<Icon name="home" size={25} color="white" />}
        />
      )}
    </View>
  );
}
