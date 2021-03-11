import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from "react-native";
import { Text} from "react-native-elements";
import HomeImage from "../components/HomeImage";
import IPadress from "../url";

export default function DetailRecommendationScreen(props) {
  // récuperation des détails de recommendations depuis RecommendationScreen avec les props
  var details = props.route.params.detailsRecommendations;

  return (
    <>
      {/* Recap de la Recommendation cliqué */}
      <HomeImage uri={details.visuel} />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.boxLogo}>
            <View style={styles.inner}>
              <Image
                source={{ uri: details.logo }}
                style={{ width: 130, height: 60, marginTop: 20 }}
              ></Image>
              <View style={styles.text}>
                <Text>{details.adresse}</Text>
              </View>
            </View>
          </View>

          <View style={styles.boxMap}>
            <View style={styles.inner}>
              <Image
                source={{ uri: details.mapView }}
                style={{
                  width: 160,
                  height: 150,
                  marginTop: 5,
                  marginLeft: 20,
                }}
              ></Image>
            </View>
          </View>

          <View>
            <View style={styles.text}>
              <Text>{details.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "80%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  boxLogo: {
    width: 200,
    height: 150,
    margin: 4,
  },
  boxMap: {
    width: 100,
    height: 150,
    margin: 4,
  },
  inner: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
  },
});
