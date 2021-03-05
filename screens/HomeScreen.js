import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import IPadress from "../url"
import HomeImage from "../components/HomeImage"



export default function HomeScreen(props) {
    return (
        <>
            <View style={{ width: '100%', paddingRight: 10, paddingLeft: 10   }}>
                <HomeImage url={"https://res.cloudinary.com/dgv5agwfj/image/upload/v1614590356/Hotel%20des%20Deux-%C3%8Eles%20%28Room%20Directory%29/3W8A7073_hotel_des_deux_iles_bd_gqbwwd.jpg"} />
            </View>

            <ScrollView style={{ width: '100%', paddingBottom: 10, paddingRight: 10, paddingLeft: 10   }}>

                <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap"}}>

                    <TouchableOpacity
                        style={{ width: "100%"}}
                        onPress={() => props.navigation.navigate('Service')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1543325042-c67825847491?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjZXB0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height:150, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10 }}
                        onPress={() => props.navigation.navigate('Event')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200, marginBottom: 10, alignSelf: "flex-end" }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%" }}
                        onPress={() => props.navigation.navigate('Recommendation')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1604595817512-b7a728795249?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXNpYW4lMjBtYXJrZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%", marginRight: 10  }}
                        onPress={() => props.navigation.navigate('Restauration')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200, marginBottom: 10}} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "48.5%" }}
                        onPress={() => props.navigation.navigate('morningNews')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwZXIlMjBuZXdzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height: 200 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: "100%"}}
                        onPress={() => props.navigation.navigate('RoomDirectory')}>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }} style={{ width: '100%', height:150, marginBottom: 10, }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </>
    )
}
