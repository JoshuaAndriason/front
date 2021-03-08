import React, {useState} from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { onChange } from 'react-native-reanimated';

const {width} = Dimensions.get("window");
const height = width * 0.6; //60%

const Carousel = () => {

  const [active,setActive] = useState(0)
  var events = ["https://res.cloudinary.com/dkyfnkhqz/image/upload/v1615109036/ROOM%20DIRECTORY/EVENTS/PDJ_d6u3nl_qcmjc1.jpg","https://res.cloudinary.com/dkyfnkhqz/image/upload/v1615109027/ROOM%20DIRECTORY/EVENTS/APERITIVO_ttfrg7_sl8rh2.jpg","https://res.cloudinary.com/dkyfnkhqz/image/upload/v1615109024/ROOM%20DIRECTORY/EVENTS/EVENT_TH%C3%89_cbxbn1_gspnzr.jpg"]

const change = (event)=> {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    console.log(slide,'slide',active,'active')
    if (slide !== active){
      setActive(slide)
    }
  }



  return (
  
      <View style={styles.container} >
        <ScrollView 
        paginEnabled 
        horizontal
        onScroll ={change}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
       {
       events.map((e,i)=>{
         return(
 <Image key={i} source={{uri:e}} style={styles.image} />
       )})}
       </ScrollView>
       <View style={styles.pagination}>
         {events.map((i,k)=>(<Text key={k} style={k == active ? styles.paginActiveText : styles.paginText}>⬤</Text>))}
         
       </View>
      </View>
 
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {marginTop: 50, width, height},
  scroll: {width, height},
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  image: {width, height, resizeMode:'cover'},
  pagination: {flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center',},
  paginText: {fontSize: (width / 30) ,color:'#888',margin: 3},
  paginActiveText:{fontSize: (width / 30) ,color:'#fff',margin: 3}
});