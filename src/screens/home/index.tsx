import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput, Image, ScrollView, FlatList } from 'react-native';
import { Header } from '../../components/header';
import { Icon } from '@rneui/base';
import mczBannerImg from '../../assets/imgs/mcz-al.png'
import { mainColor } from '../../styles';
import { CategoriesButton } from '../../components/categoriesButton';
import { categoriesData } from '../../data/categories';
import { getPlaces } from '../../data/places';
import { CardComponent } from '../../components/cardComponent';
import { SectionTitle } from '../../components/sectionTitle';
import logo from "../../assets/imgs/logo-2.png"

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    const [places, setPlaces] = useState(getPlaces("maceio", "iconics"))

    return (
        <>
            <Header/>
            <ScrollView style={styles.mainContentContainer}>
                {/* Logo */}
                <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginVertical: 20}} />

                {/* Search City */}
                <View style={styles.inputIconContainer}>
                    <Icon name='search' color={mainColor}></Icon>
                    <TextInput style={styles.input} placeholder='Pesquisar'></TextInput>
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
                        renderItem={ ( category ) => <CategoriesButton onPress={() => setPlaces(getPlaces("maceio", category.item.value))} name={category.item.name} icon={category.item.icon} />}
                        horizontal={true}
                    />
                </View>

                {/* Section Recomendados */}
                <SectionTitle title='Recomendados'/>

                <View style={{height: 320, marginTop: 20, marginBottom: 10}}>
                    <FlatList
                        data={places}
                        renderItem={ ( place ) => <CardComponent img={place.item.img} name={place.item.name} description={place.item.description} />}
                        horizontal={true}
                    />
                </View>

                {/* Section Mais Visitados */}
                <SectionTitle title='Mais Visitados'/>

                <View style={{height: 320, marginTop: 20, marginBottom: 10}}>
                    <FlatList
                        data={places}
                        renderItem={ ( place ) => <CardComponent img={place.item.img} name={place.item.name} description={place.item.description} />}
                        horizontal={true}
                    />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {
        height: '100%',
        paddingHorizontal: 20
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
