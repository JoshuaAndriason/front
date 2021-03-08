import React, {useState, useEffect} from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import IPadress from "../url"
import HomeImage from "../components/HomeImage"



export default function HomeScreen(props) {
    const [Service, setService] = useState([])
    const [Restauration, setRestauration] = useState([])
    const [Recommendation, setRecommendation] = useState([])
    const [MorningNews, setMorningNews] = useState([])
    const [RoomDirectory, setRoomDirectory] = useState([])
    const [Event, setEvent] = useState([])
    
    useEffect(() => {
        async function getImages() {
          const response = await fetch(`http://${IPadress}:3000/image`)
          const data = await response.json()
          const Image = data.result
        }
        getImages()
      }, []);

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
        getHomeImage()
      }, []);


    return (
        <>
            <View style={{ width: '100%', paddingRight: 10, paddingLeft: 10   }}>
                <HomeImage url={"https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg"} />
            </View>

            <ScrollView style={{ width: '100%', paddingBottom: 10, paddingRight: 10, paddingLeft: 10   }}>

                <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap"}}>

                    <TouchableOpacity
                        style={{ width: "100%"}}
                        onPress={() => props.navigation.navigate(Service.serviceName)}>
                        <Image source={{ uri: Service.imageService}} style={{ width: '100%', height:150, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10 }}
                        onPress={() => props.navigation.navigate('Event')}>
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
