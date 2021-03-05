import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HomeImage from '../components/HomeImage'
import IPadress from "../url"



export default function RestaurationScreen(props) {
  const [isBreakfast, setIsBreakfast] = useState(false)
  const [isDiner, setIsDiner] = useState(false)
  console.log("visible :", isBreakfast);
  return (
    <View style={styles.container}>
      <HomeImage />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              console.log('restauration')
              setIsBreakfast(!isBreakfast)
            }}>
            <Text style={styles.text}>Petit-Déjeuner</Text>
          </TouchableOpacity>
          {isBreakfast ?
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>

              <TouchableOpacity
                style={styles.list}
              >
                <Text style={styles.text}>Le Parisien</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Menu")}>
                  <Text style={{ color: "white" }}>15€</Text>
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.list}
                onPress={() => console.log('{props.navigation.navigate()}')}>
                <Text style={styles.text}>Continental</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Menu")}>
                  <Text style={{ color: "white" }}>30€</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            : null
          }
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setIsDiner(!isDiner)}>
            <Text style={styles.text}>Dîner</Text>
          </TouchableOpacity>
          {isDiner ?
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>

              <TouchableOpacity
                style={styles.list}
              >
                <Text style={styles.text}>Moules Frites</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}><Text style={{ color: "white" }}>30€</Text></TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.list}
                onPress={() => console.log('{props.navigation.navigate()}')}>
                <Text style={styles.text}>Pizza</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}><Text style={{ color: "white" }}>20€</Text></TouchableOpacity>
              </TouchableOpacity>
            </View>
            : null
          }
        </View>
      </ScrollView>
    </View>


  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'left'
  },
  block: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'left',
    height: "auto",
    marginBottom: 20
  },
  item: {
    borderColor: "#AADEC0",
    borderWidth: 0.5,
    padding: 10,
    width: '90%',
  },
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left'
  },
  list: {
    backgroundColor: "#AADEC0",
    borderColor: "#AADEC0",
    borderWidth: 0.5,
    padding: 10,
    width: '88%',
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  button: {
    borderColor: "#6EBA8E",
    backgroundColor: "#6EBA8E",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingRight: 15,
    paddingLeft: 15,
  }

});









// export default function RestaurationScreen(props) {
//   return (
//     <View style={styles.container}>
//       <HomeImage />
//       <ScrollView>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => { props.navigation.navigate('Menu') }}>
//           <Text style={styles.text}>Petit Déjeuner</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => console.log('{props.navigation.navigate()}')}>
//           <Text style={styles.text}>Dîner</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => console.log('{props.navigation.navigate()}')}>
//           <Text style={styles.text}>Snack</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => console.log('{props.navigation.navigate()}')}>
//           <Text style={styles.text}>Célébrations Personnelles</Text>
//         </TouchableOpacity>
//       </ScrollView>


//     </View>

//   )
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     width: '100%',
//     flexDirection: 'column',
//     textAlign: 'left'
//   },
//   button: {
//     borderColor: "#AADEC0",
//     borderWidth: 0.5,
//     padding: 10,
//     width: '90%',
//     marginBottom: 20
//   },
//   text: {
//     color: 'black',
//     fontSize: 18,
//     textAlign: 'left'
//   },

// });