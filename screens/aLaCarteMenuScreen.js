import React, { useState, useEffect } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import HomeImage from "../components/HomeImage";
import { ScrollView } from "react-native-gesture-handler";
import { Overlay, Button } from "react-native-elements";
import IPadress from "../url";

export default function aLaCarteMenuScreen({ route, navigation }) {
  // datas from props
  const token = route.params.token;
  const foodType = route.params.foodType;

  // States
  const [dinerDatas, setDinerDatas] = useState([]);
  const [checked, setChecked] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function getFood() {
      const response = await fetch(
        `http://${IPadress}/restauration/food/${foodType}`
      );
      const data = await response.json();
      const foods = await data.result;
      setDinerDatas(foods);
    }
    getFood();
  }, []);

    // const toggle overlay affiche message de conf et fait la requete en meme temps//
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
  return (
    <>
      {dinerDatas.length > 0 ? (
        <View style={styles.container}>
          <HomeImage uri="https://res.cloudinary.com/dgv5agwfj/image/upload/v1615473066/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/Sans_titre-1_pic9rw.jpg" />
          <ScrollView style={{ padding: 10 }}   scrollIndicatorInsets={{ top: 1, bottom: 1 }}
  contentInsetAdjustmentBehavior="always">
            <View style={styles.description}>
              <Text style={{ textAlign: "justify" }}>
                {dinerDatas.description}
              </Text>
            </View>

            <View>
              <Formik
                initialValues={{
                  heure: ":",
                }}
                onSubmit={async (values) => {
                  // store all entries of the values object
                  const valuesEntry = Object.entries(values);
                  // initialize an array where the details of the order will be push inside
                  let details = [];
                  // push only the object that contains an detail of the order into details array
                  for (let index = 0; index < valuesEntry.length; index++) {
                    if (valuesEntry[index][0] !== "heure") {
                      let obj = {};
                      obj[valuesEntry[index][0]] = valuesEntry[index][1];
                      details.push(obj);
                    }
                  }
                  // store the current date (when the commande has been ordered)
                  const date = new Date().toString();

                  // send the order to the back

                  const sendOrder = await fetch(
                    `http://${IPadress}/restauration/order`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        details,
                        heure: values.heure,
                        lieu: checked,
                        date,
                        token,
                      }),
                    }
                  )
                    .then((response) => {
                      response.json();
                    })
                    .then((data) => {
                      console.log("data: ", data);
                      setVisible(!visible);
                    })
                    .catch((err) => {
                      console.log("Something went wrong", err);
                    });
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View>
                    <Text style={styles.title}>Quelques Précisions</Text>
                    <View style={styles.precision}>
                      <View>
                        <View>
                          <Text>Heure :</Text>
                          <TextInput
                            style={styles.input}
                            onChangeText={handleChange("heure")}
                            placeholder={"9:30"}
                            value={values.heure}
                          />
                        </View>
                      </View>

                      {/* Order precisions */}
                      <View>
                        <Text>En chambre</Text>
                        <RadioButton
                          value="inRoom"
                          status={
                            checked === "inRoom" ? "checked" : "unchecked"
                          }
                          onPress={() => setChecked("inRoom")}
                        />
                        <Text>Sur place</Text>
                        <RadioButton
                          value="onSite"
                          status={
                            checked === "onSite" ? "checked" : "unchecked"
                          }
                          onPress={() => setChecked("onSite")}
                        />
                      </View>
                    </View>

                    {/* Choix */}
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    ></TextInput>
                    <Text style={styles.title}>Faites votre choix</Text>
                    {/* Starter choices */}
                    {dinerDatas
                      .filter((data) => data.type == "Entrées")
                      .map((categoryObj, i) => {
                        return (
                          <>
                            <Text key={i} style={styles.category}>
                              Entrées
                            </Text>
                            <Text style={styles.precision}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>

                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(
                                categoryObj.nameArticle
                              )}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.starter}
                            />
                          </>
                        );
                      })}

                    {/* Dish choices */}
                    {dinerDatas
                      .filter((data) => data.type == "Plats")
                      .map((categoryObj, i) => {
                        return (
                          <>
                            <Text key={i} style={styles.category}>
                              Plats
                            </Text>
                            <Text style={styles.details}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(
                                categoryObj.nameArticle
                              )}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.dish}
                            />
                          </>
                        );
                      })}

                    {/* Desserts choices */}
                    {dinerDatas
                      .filter((data) => data.type == "Desserts")
                      .map((categoryObj) => {
                        return (
                          <>
                            <Text style={styles.category}>Desserts</Text>
                            <Text style={styles.details}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(
                                categoryObj.nameArticle
                              )}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.dessert}
                            />
                          </>
                        );
                      })}
                    {/* à la carte choices */}
                    {dinerDatas
                      .filter((data) => data.type == "Carte")
                      .map((categoryObj) => {
                        return (
                          <>
                            <Text style={styles.category}>A la carte</Text>
                            <Text style={styles.details}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(
                                categoryObj.nameArticle
                              )}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.dessert}
                            />
                          </>
                        );
                      })}

                    <Button
                      onPress={handleSubmit}
                      buttonStyle={{
                        marginTop: 10,
                        marginBottom: 50,
                        backgroundColor: "#AADEC0",
                        width: 200,
                        color: "red",
                        alignSelf: "center",
                      }}
                      onPress={handleSubmit}
                      title="Valider"
                    />
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
          <Overlay isVisible={visible} style={{ flexDirection: "column" }}>
            <Text>Votre commande a été enregistrée.</Text>
            <Text>A très bientôt ! </Text>
            <Button
              buttonStyle={{
                marginTop: 15,
                backgroundColor: "#AADEC0",
                width: "80%",
                alignSelf: "center",
              }}
              title="RETOUR"
              onPress={() => {
                toggleOverlay();
                navigation.navigate("BottomNavigator");
              }}
            />
          </Overlay>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  description: {
    paddingBottom: 10,
    width: "100%",
  },
  choices: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  precision: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    textTransform: "capitalize",
  },
  details: {
    textTransform: "capitalize",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
  category: {
    backgroundColor: "#AADEC0",
    padding: 3,
  },
  input: {
    height: 30,
    borderColor: "#AADEC0",
    borderWidth: 1,
    width: 30,
    textAlign: "center",
  },
  options: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  itemOption: {
    marginLeft: 10,
  },
});
