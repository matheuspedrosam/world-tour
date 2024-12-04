import { Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, Text } from 'react-native';
import mczBannerImg from '../../assets/imgs/mcz-al.png'
import { getPlaces } from '../../data/places';
import { CardComponent } from '../../components/cardComponent';
import logo from "../../assets/imgs/logo-2.png"
import { Link, useLocalSearchParams } from 'expo-router';
import { Icon } from '@rneui/base';
import { mainColor } from '@/styles';
import useFetchData from '@/hooks/useFetchData';

export interface AllPlacesProps {
}

export default function AllPlaces (props: AllPlacesProps) {
    const {selectedCity, selectedCategory}: any = useLocalSearchParams();

    const [places, setPlaces] = useState<any>([]);
    const [displayPlaces, setDisplayPlaces] = useState<any>([]);
    const [searchConfings, setSearchConfigs] = useState<any>(null);

    const { getDataByQuery } = useFetchData();
    const [loading, setLoading] = useState<boolean | null>(null);

    useEffect(() => {
        async function getPlacesAndCategories() {
            setLoading(true);
            try{
                const data = await getDataByQuery("places", "city", "==", selectedCity);
                const placesData = data.filter((doc: any) => doc.category === selectedCategory); 
                setPlaces(placesData);
            } catch (e){
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        getPlacesAndCategories();
    }, [selectedCity, selectedCategory])

    useEffect(() => {
        if(!places) return;
        let filteredData = [...places];

        // 1. Busca
        if (searchConfings) {
            filteredData = filteredData.filter(item => item['name'].toLowerCase().includes(searchConfings.searchTerm.toLowerCase()));
        }

        if(filteredData.length === 0){
            setDisplayPlaces(null);
            return;
        }
        setDisplayPlaces((filteredData));
    }, [places, searchConfings]);

    return (
        <ScrollView style={styles.mainContentContainer}>
            {/* Logo */}
            <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginVertical: 20}} />

            {loading && <Text>Carregando...</Text>}
            {!loading &&
                <Fragment>
                    {/* Search City */}
                    <View style={styles.inputIconContainer}>
                        <Icon name='search' color={mainColor}></Icon>
                        <TextInput
                            style={styles.input}
                            placeholder='Pesquise um lugar'
                            onChangeText={(text) => setSearchConfigs({searchTerm: text})}/>
                    </View>
                    <View style={styles.placesContainer}>
                        {displayPlaces && displayPlaces.map((place: any, index: number) => (
                            <CardComponent key={place.id ? place.id : index} place={place} />
                        ))}
                    </View>
                </Fragment>
            }
            {(!loading && !displayPlaces) && <Text>Nada foi encontrado...</Text>}
            
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
      marginHorizontal: -4,
      gap: 10,
      marginVertical: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
    // placesContainer: {
    //   width: '100%',
    //   display: 'flex',
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-between',
    //   gap: 20,
    //   padding: 5,
    //   marginVertical: 20
    // },
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
