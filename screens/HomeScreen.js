import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import IPadress from "../url"
import HomeImage from "../components/HomeImage"
import { onChange } from 'react-native-reanimated';
import { connect } from 'react-redux';

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%


export function HomeScreen(props) {
    const [Service, setService] = useState([])
    const [Restauration, setRestauration] = useState([])
    const [Recommendation, setRecommendation] = useState([])
    const [MorningNews, setMorningNews] = useState([])
    const [RoomDirectory, setRoomDirectory] = useState([])
    const [Event, setEvent] = useState([])
    const [active, setActive] = useState(0)
    const [events, setEvents] = useState([])
  

      useEffect(() => {
        async function getHomeImage() {
        const response = await fetch(`http://${IPadress}:3000/image`)
          const data = await response.json()
          const hotels = await data.result
          const ImageHomepage = hotels[0].image
            setService(ImageHomepage[0]);
            setRestauration(ImageHomepage[1]);
            setRecommendation(ImageHomepage[2]);
            setMorningNews(ImageHomepage[3]);
            setRoomDirectory(ImageHomepage[4]);
            setEvent(ImageHomepage[5]);
        }
            var eventsFunction = async () => {
                var rawResponse = await fetch(`http://${IPadress}:3000/events`)
                var response = await rawResponse.json();
                setEvents(response.events)
        }
        getHomeImage();
        eventsFunction();
      }, []);



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
            <Text>Token :{props.token}</Text>
            <ScrollView style={{ width: '100%', paddingBottom: 10, paddingRight: 10, paddingLeft: 10 }}>

                <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap" }}>

                    <TouchableOpacity
                        style={{ width: "100%"}}
                        onPress={() => props.navigation.navigate(Service.serviceName)}>
                        <Image source={{ uri: Service.imageService}} style={{ width: '100%', height:150, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10 }}
                        onPress={() => props.navigation.navigate('EventDetails')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200, marginBottom: 10, alignSelf: "flex-end" }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%" }}
                        onPress={() => props.navigation.navigate(Recommendation.serviceName)}>
                        <Image source={{ uri: Recommendation.imageRecommendatation}} style={{ width: '100%', height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10  }}
                        onPress={() => props.navigation.navigate(Restauration.serviceName)}>
                        <Image source={{ uri: Restauration.imageRestauration }} style={{ width: '100%', height: 200, marginBottom: 10}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%" }}
                        onPress={() => props.navigation.navigate(MorningNews.serviceName)}>
                        <Image source={{ uri: MorningNews.imageNews }} style={{ width: '100%', height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "100%"}}
                        onPress={() => props.navigation.navigate(RoomDirectory.serviceName)}>
                        <Image source={{ uri: RoomDirectory.imageDirectory }} style={{ width: '100%', height:150, marginBottom: 10, }} />
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