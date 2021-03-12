import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import HomeImage from "../components/HomeImage";
import IPadress from "../url";

export default function RecommendationScreen(props) {
  //Déclaration des ETATS
  const [isRestaurantVisible, setIsRestaurantVisible] = useState(false);
  const [isFlaneriesVisible, setIsFlaneriesVisible] = useState(false);
  const [Restaurants, setRestaurants] = useState([]);
  const [Flaneries, setFlaneries] = useState([]);
  // Récupération des recommendation de la BDD depuis le back
  useEffect(() => {
    async function getAllRecommendation() {
      const response = await fetch(`http://${IPadress}/recommendation`);
      const data = await response.json();
      const recommendations = data.result;
      setRestaurants(
        recommendations.filter(
          (recommendations) =>
            recommendations.typeRecommandation == "Restaurant"
        )
      );
      setFlaneries(
        recommendations.filter(
          (recommendations) => recommendations.typeRecommandation == "Flânerie"
        )
      );
    }
    getAllRecommendation();
  }, []);

  return (
    <View style={styles.container}>
      {/* HomeIMAGE avec un props pour changer l'image par défault*/}
      <HomeImage uri="https://res.cloudinary.com/dgv5agwfj/image/upload/v1615297110/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/RECOMMANDATIONS_LARGE_hewvj1.jpg" />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.block}>
          {/* Mise en place des recommandations de restaurants avec la condition de montrer les détails au click sur Restaurants*/}
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setIsRestaurantVisible(!isRestaurantVisible);
            }}
          >
            <Text style={styles.textTitle}>Restaurant recommandé</Text>
          </TouchableOpacity>
          {isRestaurantVisible ? (
            <>
              {Restaurants.map((recommendations, i) => {
                return (
                  <View
                    style={{ flex: 1, width: "100%", alignItems: "center" }}
                  >
                    <TouchableOpacity key={i} style={styles.list}>
                      <Text style={styles.text}>
                        {recommendations.nameRecommandation}
                      </Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          props.navigation.navigate("DetailRecommendation", {
                            detailsRecommendations: recommendations,
                          })
                        }
                      >
                        <Text style={{ color: "white" }}>Voir</Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </>
          ) : null}
        </View>
        <View style={styles.block}>
          {/* Mise en place des recommandations de Flaneries avec la condition de montrer les détails au click sur Flaneries*/}
          <TouchableOpacity
            style={styles.item}
            onPress={() => setIsFlaneriesVisible(!isFlaneriesVisible)}
          >
            <Text style={styles.textTitle}>Flâneries</Text>
          </TouchableOpacity>
          {isFlaneriesVisible ? (
            <>
              {Flaneries.map((recommendations, i) => {
                return (
                  <View
                    style={{ flex: 1, width: "100%", alignItems: "center" }}
                  >
                    <TouchableOpacity key = {i} style={styles.list}>
                      <Text style={styles.text}>
                        {recommendations.nameRecommandation}
                      </Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          props.navigation.navigate("DetailRecommendation", {
                            detailsRecommendations: recommendations,
                          })
                        }
                      >
                        <Text style={{ color: "white" }}>Voir</Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    textAlign: "left",
  },
  block: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    textAlign: "left",
    height: "auto",
  },
  item: {
    borderColor: "#AADEC0",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    marginBottom:5
  },
  text: {
    color: "black",
    fontSize: 15,
    textAlign: "left",
  },
  textTitle: {
    color: "black",
    fontSize: 18,
    textAlign: "left",
  },
  list: {
    backgroundColor: "#AADEC0",
    borderColor: "#AADEC0",
    borderWidth: 0.5,
    padding: 10,
    width: "88%",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderColor: "#6EBA8E",
    backgroundColor: "#6EBA8E",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
});
