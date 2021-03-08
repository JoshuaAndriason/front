import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import IPadress from "../url"
import HomeImage from "../components/HomeImage"
import { onChange } from 'react-native-reanimated';
import { connect } from 'react-redux';

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%


export function HomeScreen(props) {

    useEffect(() => {
        var events = async () => {
            var rawResponse = await fetch(`http://${IPadress}:3000/events`)
            var response = await rawResponse.json();
            console.log(response.events,'events front')
        }
        events()

    }, []);

    const [active, setActive] = useState(0)
    var events = ["https://res.cloudinary.com/dkyfnkhqz/image/upload/v1615109036/ROOM%20DIRECTORY/EVENTS/PDJ_d6u3nl_qcmjc1.jpg", "https://res.cloudinary.com/dkyfnkhqz/image/upload/v1615109027/ROOM%20DIRECTORY/EVENTS/APERITIVO_ttfrg7_sl8rh2.jpg", "https://res.cloudinary.com/dkyfnkhqz/image/upload/v1615109024/ROOM%20DIRECTORY/EVENTS/EVENT_TH%C3%89_cbxbn1_gspnzr.jpg"]


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
                        events.map((e, i) => {
                            return (
                                <Image key={i} source={{ uri: e }} style={styles.image} />
                            )
                        })}
                </ScrollView>
                <View style={styles.pagination}>
                    {events.map((i, k) => (<Text key={k} style={k == active ? styles.paginActiveText : styles.paginText}>⬤</Text>))}

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


function mapStateToProps(state) {
    return { token: state.token }
} export default connect(
    mapStateToProps,

)(HomeScreen);

const styles = StyleSheet.create({
    container: { width, height,marginBottom:15 },
    scroll: { width, height },
    image: { width, height, resizeMode: 'cover'},
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    paginText: { fontSize: (width / 30), color: '#888', margin: 3 },
    paginActiveText: { fontSize: (width / 30), color: '#fff', margin: 3 }
});