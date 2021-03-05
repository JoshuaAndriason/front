
import React, { useState } from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
import HomeImage from '../components/HomeImage';
import { ScrollView } from 'react-native-gesture-handler';
import IPadress from "../url"


export default function MenuScreen(props) {
  const [checked, setChecked] = useState('');

  return (
    <View style={styles.container}>
      <HomeImage />
      <ScrollView style={{ padding: 10 }}>
        <View style={styles.description}>
          <Text style={{ textAlign: "justify" }}>À la parisienne : nous sommes convaincus que le petit-déjeuner est le prélude incontournable d’une bonne journée. Le petit déjeuner parisien se compose : d'une boisson chaude, d'un jus frais et bio, d'un panier du boulanger incluant croissant et baguette de la fameuse boulangerie de la Tour d'Argent. Pour finir, nous accompagnons le tout avec sa verrine de graine de chia et de fruits de saisons préparée par SouSou notre primeur complice de la rue Saint Louis en l’Île</Text>
        </View>

        <View>
          <Formik
            initialValues={{ heure: ":", quantity: "", croissant: "", painChocolat: "", chocoChaud: "", coffee: "" }}

            onSubmit={values => {
              console.log("values:", values)
              const valueModified = { ...values, checked }
              console.log(valueModified);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Text style={styles.title}>Quelques Précisions</Text>
                <View style={styles.details}>
                  <View>
                    <View>
                      <Text>Quantité :</Text>
                      <TextInput
                        style={styles.input}
                        placeholder={"2"}
                        value={values.quantity}
                        keyboardType={'numeric'}
                      />
                    </View>

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
                      value='inRoom'
                      status={checked === 'inRoom' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('inRoom')}
                    />
                    <Text>Sur place</Text>
                    <RadioButton
                      value='onSite'
                      status={checked === 'onSite' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('onSite')}
                    />
                  </View>
                </View>

                {/* Choix */}
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}>
                </TextInput>
                <Text style={styles.title}>Faites votre choix</Text>

                <Text style={styles.category}>Vennoiseries</Text>
                <View style={styles.choices}>
                  <View style={styles.options}>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("croissant")}
                      placeholder={"1"}
                      keyboardType={'numeric'}
                      value={values.croissant}

                    />
                    <Text style={styles.itemOption}>Croissant</Text>
                  </View>

                  <View style={styles.options}>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("painChocolat")}
                      placeholder={"1"}
                      keyboardType={'numeric'}
                      value={values.painChocolat}
                    />
                    <Text style={styles.itemOption}>Pain au chocolat</Text>
                  </View>
                </View>
                <Text style={styles.category}>Boisson</Text>
                <View style={styles.choices}>
                  <View style={styles.options}>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("coffee")}
                      placeholder={"1"}
                      value={values.coffee}
                      keyboardType={'numeric'}

                    />
                    <Text style={styles.itemOption}>Café</Text>
                  </View>

                  <View style={styles.options}>

                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("chocoChaud")}
                      placeholder={"1"}
                      value={values.chocoChaud}
                      keyboardType={'numeric'}

                    />
                    <Text style={styles.itemOption}>Chocolat chaud</Text>
                  </View>
                </View>
                <Button onPress={handleSubmit} title="Valider" />

              </View>
            )}
          </Formik>

        </View>
      </ScrollView>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  description: {
    paddingBottom: 10,
    width: "100%"
  },
  choices: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  details: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15
  },
  category: {
    backgroundColor: "#AADEC0",
    padding: 3
  },
  input: {
    height: 30,
    borderColor: '#AADEC0',
    borderWidth: 1,
    width: 30,
    textAlign: 'center'
  },
  options: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center"
  },
  itemOption: {
    marginLeft: 10
  }
});