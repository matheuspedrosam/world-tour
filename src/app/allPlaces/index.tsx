import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import mczBannerImg from '../../assets/imgs/mcz-al.png'
import { getPlaces } from '../../data/places';
import { CardComponent } from '../../components/cardComponent';
import logo from "../../assets/imgs/logo-2.png"
import { Link, useLocalSearchParams } from 'expo-router';
import { Icon } from '@rneui/base';
import { mainColor } from '@/styles';

export interface AllPlacesProps {
}

export default function AllPlaces (props: AllPlacesProps) {
    const {city, category}: any = useLocalSearchParams();
    const [places, setPlaces] = useState(getPlaces(city, category))

    return (
        <ScrollView style={styles.mainContentContainer}>
            {/* Logo */}
            <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginVertical: 20}} />

            {/* Search City */}
            <View style={styles.inputIconContainer}>
                <Icon name='search' color={mainColor}></Icon>
                <TextInput style={styles.input} placeholder='Pesquise um lugar'></TextInput>
            </View>

            <View style={styles.placesContainer}>
                {places && places.map((place: any, index: number) => (
                  <Link 
                    key={place.id ? place.id : index}
                    href={{pathname: "/place", params: {place: JSON.stringify(place)}}}
                  >
                    <CardComponent width={265} img={place.imgs[0]} name={place.name} description={place.description} />
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
      gap: 20,
      padding: 5,
      marginVertical: 20
    },
    inputIconContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      borderColor: 'lightgray',
      borderWidth: 1,
      shadowColor: 'lightgray',
      gap: 10
  },
  input:{
      flex: 1,
  }
});
