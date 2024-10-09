import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import mczBannerImg from '../../assets/imgs/mcz-al.png'
import { getPlaces } from '../../data/places';
import { CardComponent } from '../../components/cardComponent';
import logo from "../../assets/imgs/logo-2.png"
import { Link, useLocalSearchParams } from 'expo-router';

export interface AllPlacesProps {
}

export default function AllPlaces (props: AllPlacesProps) {
    const params: any = useLocalSearchParams();
    const {city, category} = params;
    const [places, setPlaces] = useState(getPlaces(city, category))

    return (
        <ScrollView style={styles.mainContentContainer}>
            {/* Logo */}
            <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginVertical: 20}} />

            {/* City Banner */}
            <View style={{marginTop: 20}}>
                <Image 
                    source={mczBannerImg} 
                    style={{ width: '100%', height: 300, borderRadius: 10 }} 
                />
            </View>

            <View style={styles.placesContainer}>
                {places && places.map((place: any, index: number) => (
                  <Link 
                    key={place.id ? place.id : index}
                    href={{pathname: "/place", params: {place: JSON.stringify(place)}}}
                  >
                    <CardComponent img={place.imgs[0]} name={place.name} description={place.description} />
                  </Link>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {
      height: '100%',
      paddingHorizontal: 20,
      backgroundColor: 'white'
    },
    placesContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 30,
      padding: 5,
      marginTop: 20
    },
});
