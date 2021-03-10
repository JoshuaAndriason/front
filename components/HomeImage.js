import React from "react";
import { View, Image } from "react-native";

export default function HomeImage(props) {
  return (
    <View style={{ width: "100%" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: "100%", height: 200, marginBottom: 15 }}
      />
    </View>
  );
}

HomeImage.defaultProps = {
  uri:
    "https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg",
};
