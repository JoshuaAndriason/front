import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import HomeImage from "../components/HomeImage";
import { ScrollView } from "react-native-gesture-handler";
import IPadress from "../url";

export default function aLaCarteMenuScreen({ route }) {
  const foodType = route.params.foodType;
  const [dinerDatas, setDinerDatas] = useState([]);
  const [checked, setChecked] = useState("");

 
  useEffect(() => {
    async function getFood() {
      const response = await fetch(
        `http://${IPadress}:3000/restauration/food/${foodType}`
      );
      const data = await response.json();
      const foods = await data.result;
      setDinerDatas(foods);
    }
    getFood();
  }, []);

  return (
    <>
      {dinerDatas.length > 0 ? (
        <View style={styles.container}>
          <HomeImage uri={dinerDatas.image} />
          <ScrollView style={{ padding: 10 }}>
            <View style={styles.description}>
              <Text style={{ textAlign: "justify" }}>
                {dinerDatas.description}
              </Text>
            </View>

            <View>
              <Formik
                initialValues={{
                  heure: ":",
                  starter: "",
                  dessert: "",
                  dish: "",
                }}
                onSubmit={(values) => {
                  console.log("values:", values);
                  const valueModified = { ...values, checked };
                  console.log(valueModified);
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

                    <Text style={styles.category}>Entrées</Text>
                    {dinerDatas
                      .filter((data) => data.type == "Entrées")
                      .map((categoryObj) => {
                        
                        return (
                          <>
                            <Text style={styles.precision}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>

                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(categoryObj.nameArticle)}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.starter}
                            />
                          </>
                        );
                      })}

                    <Text style={styles.category}>Plats</Text>
                    {dinerDatas
                      .filter((data) => data.type == "Plats")
                      .map((categoryObj) => {
                        
                        return (
                          <>
                            <Text style={styles.details}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(categoryObj.nameArticle)}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.dish}
                            />
                          </>
                        );
                      })}
                    <Text style={styles.category}>Desserts</Text>
                    {dinerDatas
                      .filter((data) => data.type == "Desserts")
                      .map((categoryObj) => {
                        
                        return (
                          <>
                            <Text style={styles.details}>
                              {categoryObj.nameArticle}
                            </Text>
                            <Text>{categoryObj.prix} €</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={handleChange(categoryObj.nameArticle)}
                              placeholder={"1"}
                              keyboardType={"numeric"}
                              value={values.dessert}
                            />
                          </>
                        );
                       
                      })}

                    <Button onPress={handleSubmit} title="Valider" />
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
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
    marginBottom: 15
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
