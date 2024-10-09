import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Image, ScrollView, FlatList } from 'react-native';
import { Icon } from '@rneui/base';
import mczBannerImg from '../../assets/imgs/mcz-al.png'
import { mainColor } from '../../styles';
import { CategoriesButton } from '../../components/categoriesButton';
import { categoriesData } from '../../data/categories';
import { getPlaces } from '../../data/places';
import { CardComponent } from '../../components/cardComponent';
import { SectionTitle } from '../../components/sectionTitle';
import logo from "../../assets/imgs/logo-2.png"
import { Link } from 'expo-router';
import { useUserStore } from '@/store/user-store';

export interface HomeScreenProps {
}

const initialCity = "maceio";
const initialCategory = "iconics";


export default function HomeScreen (props: HomeScreenProps) {
    const [places, setPlaces] = useState([])
    const [city, setCity] = useState(initialCity);
    const [category, setCategory] = useState(initialCategory);
    const {user, setUser} = useUserStore();

    useEffect(() => {
        setPlaces(getPlaces(city, category));
    }, [city, category])

    return (
        <ScrollView style={styles.mainContentContainer}>
            {/* Logo */}
            <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginVertical: 20}} />

            {/* Search City */}
            <View style={styles.inputIconContainer}>
                <Icon name='search' color={mainColor}></Icon>
                <TextInput style={styles.input} placeholder='Pesquisar cidade'></TextInput>
            </View>

            {/* City Banner */}
            <View style={{marginTop: 20}}>
                <Image 
                    source={mczBannerImg} 
                    style={{ width: '100%', height: 300, borderRadius: 10 }} 
                />
            </View>

            {/* Categories List */}
            <View style={{height: 60, marginTop: 20, marginBottom: 10}}>
                <FlatList
                    data={categoriesData}
                    renderItem={ ( category ) => <CategoriesButton onPress={() => setCategory(category.item.value)} name={category.item.name} icon={category.item.icon} />}
                    horizontal={true}
                />
            </View>


            <SectionTitle citySelected={city} categorySelectd={category} title='Recomendados'/>

            <View style={{height: 320, marginTop: 20, marginBottom: 10}}>
                <FlatList
                    data={places}
                    renderItem={ ( place: any ) => (
                        <Link style={{marginHorizontal: 8}} href={{pathname: "/place", params: {place: JSON.stringify(place.item)}}}>
                            <CardComponent width={250} img={place.item.imgs[0]} name={place.item.name} description={place.item.description} />
                        </Link>)
                    }
                    horizontal={true}
                />
            </View>

            {/* Section Mais Visitados */}
            <SectionTitle citySelected={city} categorySelectd={category} title='Mais Visitados'/>

            <View style={{height: 320, marginTop: 20, marginBottom: 10}}>
                <FlatList
                    data={places}
                    renderItem={ ( place: any ) => (
                        <Link style={{marginHorizontal: 8}} href={{pathname: "/place", params: {place: JSON.stringify(place.item)}}}>
                            <CardComponent width={250} img={place.item.imgs[0]} name={place.item.name} description={place.item.description} />
                        </Link>)
                    }
                    horizontal={true}
                />
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
    imgStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
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
