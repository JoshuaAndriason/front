import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import IPadress from "../url"
import HomeImage from "../components/HomeImage"
import { onChange } from 'react-native-reanimated';
import { connect } from 'react-redux';

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%


export function HomeScreen(props) {
    const [active, setActive] = useState(0)
    const [event, setEvent] = useState([])
    useEffect(() => {
        var eventsFunction = async () => {
            var rawResponse = await fetch(`http://${IPadress}:3000/events`)
            var response = await rawResponse.json();

            setEvent(response.events)
        }
        eventsFunction()

    }, []);
    conson

    const change = (event) => {
        const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        console.log(slide, 'slide', active, 'active')
        if (slide !== active) {
            setActive(slide)
        }
    }

    return (
        <>
        
            <View style={styles.container} >
                <ScrollView
                    paginEnabled
                    horizontal
                    onScroll={change}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll}>
                    {
                        events.slice(0,3).map((e, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={() =>{props.onSubmitEvent(e._id); props.navigation.navigate('Event')}}>
                                <Image key={i} source={{ uri: e.image }} style={styles.image} />

                                </TouchableOpacity>
                            )
                        })}
                </ScrollView>
                <View style={styles.pagination}>
                    {events.slice(0,3).map((i, k) => (<Text key={k} style={k == active ? styles.paginActiveText : styles.paginText}>⬤</Text>))}

                </View>
            </View>
            <Text>token :{props.token}</Text>
            <ScrollView style={{ width: '100%', paddingBottom: 10, paddingRight: 10, paddingLeft: 10 }}>

                <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap" }}>

                    <TouchableOpacity
                        style={{ width: "100%" }}
                        onPress={() => props.navigation.navigate('Service')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1543325042-c67825847491?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjZXB0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 150, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10 }}
                        onPress={() => props.navigation.navigate('EventDetails')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200, marginBottom: 10, alignSelf: "flex-end" }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%" }}
                        onPress={() => props.navigation.navigate('Recommendation')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1604595817512-b7a728795249?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXNpYW4lMjBtYXJrZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10 }}
                        onPress={() => props.navigation.navigate('Restauration')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%" }}
                        onPress={() => props.navigation.navigate('morningNews')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwZXIlMjBuZXdzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "100%" }}
                        onPress={() => props.navigation.navigate('RoomDirectory')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 150, marginBottom: 10, }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </>
    )
}

function mapStateToProps(state){
    return {token:state.token}
  } 
   function mapDispatchToProps(dispatch) {
    return {
      onSubmitEvent: function(idEvent) {
          console.log('on SUBMIT EVENT',idEvent) 
        dispatch( {type: 'saveEventId', idEvent: idEvent }) 
      }
    }
  }
  export default connect(mapStateToProps,
    mapDispatchToProps
    )(HomeScreen);

const styles = StyleSheet.create({
    container: { width, height,marginBottom:15 },
    scroll: { width, height },
    image: { width, height, resizeMode: 'cover'},
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    paginText: { fontSize: (width / 30), color: '#888', margin: 3 },
    paginActiveText: { fontSize: (width / 30), color: '#fff', margin: 3 }
});