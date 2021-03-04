
import React, { useState } from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
import HomeImage from '../components/HomeImage';
import { ScrollView } from 'react-native-gesture-handler';


export default function MenuScreen(props) {
  const [checked, setChecked] = useState('');

  return (
    <View style={styles.container}>
      <HomeImage />
      <ScrollView>
        <View style={styles.description}>
          <Text style={{ textAlign: "center" }}>À la parisienne : nous sommes convaincus que le petit-déjeuner est le prélude incontournable d’une bonne journée. Le petit déjeuner parisien se compose : d'une boisson chaude, d'un jus frais et bio, d'un panier du boulanger incluant croissant et baguette de la fameuse boulangerie de la Tour d'Argent. Pour finir, nous accompagnons le tout avec sa verrine de graine de chia et de fruits de saisons préparée par SouSou notre primeur complice de la rue Saint Louis en l’Île</Text>
        </View>

        <View>
          <Formik
            initialValues={{ heure: ":", quantity: "", croissant: "", painChololat: "", chocoChaud: "", coffee: "" }}

            onSubmit={values => {
              console.log("values:" , values)
              const valueModified = { ...values, checked }
              console.log(valueModified);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Text style={styles.title}>Quelques Précisions</Text>
                <View style={styles.choices}>

                  <View>
                    <Text>Quantité :</Text>
                    <TextInput
                      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign: 'left' }}
                      onChangeText={handleChange("quantity")}
                      placeholder={"ex: 2"}
                      value={values.quantity}
                      keyboardType={'numeric'}
                    />

                  </View>

                  <View>
                    <Text>Heure :</Text>
                    <TextInput
                      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign: 'center' }}
                      onChangeText={handleChange("heure")}
                      placeholder={"ex: 9:30"}
                      value={values.heure}
                    />
                  </View>

                  <View>
                    <Text>En chambre</Text>
                    <RadioButton
                      value='InRoom'
                      status={checked === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('first')}

                    />

                    <Text>Sur place</Text>
                    <RadioButton
                      value='onSite'
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('second')}

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

                <Text>Vennoiseries</Text>
                <View style={styles.choices}>
                  <View>
                    <Text>Croissant</Text>
                    <TextInput
                      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign: 'center' }}
                      onChangeText={handleChange("croissant")}
                      placeholder={"ex: 1"}
                      keyboardType={'numeric'}
                      value={values.croissant}

                    />
                  </View>

                  <View>
                    <Text>Pain au chocolat</Text>
                    <TextInput
                      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign: 'center' }}
                      onChangeText={handleChange("painChocolat")}
                      placeholder={"ex: 1"}
                      keyboardType={'numeric'}
                      value={values.painChololat}


                    />
                  </View>
                </View>
                <Text >Boisson</Text>
                <View style={styles.choices}>
                  <View>
                    <Text>Café</Text>
                    <TextInput
                      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign: 'center' }}
                      onChangeText={handleChange("coffee")}
                      placeholder={"ex: 1"}
                      value={values.coffee}
                      keyboardType={'numeric'}

                    />
                  </View>

                  <View>
                    <Text>Chocolat chaud</Text>
                    <TextInput
                      style={{ height: 30, borderColor: '#AADEC0', borderWidth: 1, width: 80, textAlign: 'center' }}
                      onChangeText={handleChange("chocoChaud")}
                      placeholder={"ex: 1"}
                      value={values.chocoChaud}
                      keyboardType={'numeric'}

                    />
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
    width: "100%",
  },
  choices: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5
  }
});