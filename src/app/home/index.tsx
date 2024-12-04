import { useState, useEffect, Fragment } from 'react';
import { View, StyleSheet, TextInput, Image, ScrollView, FlatList, Text, Touchable, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import mczBannerImg from '../../assets/imgs/mcz-al.png'
import { mainColor } from '../../styles';
import { CategoriesButton } from '../../components/categoriesButton';
import { CardComponent } from '../../components/cardComponent';
import { SectionTitle } from '../../components/sectionTitle';
import logo from "../../assets/imgs/logo-2.png"
import { useRouter } from 'expo-router';
import { useUserStore } from '@/store/user-store';
import Toast from 'react-native-toast-message';
import useFetchData from '@/hooks/useFetchData';

export interface HomeScreenProps {
}



export default function HomeScreen (props: HomeScreenProps) {
    const {user, setUser, logout} = useUserStore();

    const [places, setPlaces] = useState<any>([])
    const [displayPlaces, setDisplayPlaces] = useState<any>([])
    const [categories, setCategories] = useState<any>([])
    const [selectedCity, setSelectedCity] = useState("Maceió");
    const [selectedCategory, setSelectedCategory] = useState("");

    const router = useRouter();

    const { getData, getDataByQuery } = useFetchData();
    const [loading, setLoading] = useState<boolean | null>(null);


    useEffect(() => {
        Toast.show({
            type: 'success',
            text1: 'Logado!',
            text2: 'Aproveite 🙂',
            visibilityTime: 3000
        });
    }, [])

    useEffect(() => {
        async function getPlacesAndCategories() {
            setLoading(true);
            try{
                const placesData = await getDataByQuery("places", "city", "==", selectedCity);
                const categoriesData = await getData("categories");
                setPlaces(placesData);
                setCategories(categoriesData);
                setSelectedCategory("Iconicos");
            } catch (e){
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        getPlacesAndCategories();
    }, [selectedCity])

    useEffect(() => {
        function updateCategory() {
            setLoading(true);
            console.log(selectedCategory);
            
            const filteredPlaces = places.filter((doc: any) => doc.category === selectedCategory); 
            setDisplayPlaces(filteredPlaces);
            setLoading(false);
        }
        updateCategory();
    }, [selectedCategory])

    function handleLogout(){
        logout();
        router.replace("/");
    }

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

            {loading && <Text style={{marginTop: 40}}>Carregando...</Text>}
            {!loading && 
                <Fragment>
                    {/* Categories List */}
                    <View style={{height: 60, marginTop: 20, marginBottom: 10}}>
                        <FlatList
                            data={categories}
                            renderItem={ ( category ) => <CategoriesButton onPress={() => setSelectedCategory(category.item.name)} selectedCategory={selectedCategory} name={category.item.name} icon={category.item.icon} />}
                            horizontal={true}
                        />
                    </View>
                    <SectionTitle citySelected={selectedCity} categorySelectd={selectedCategory} title='Recomendados'/>
                    <View style={{height: 320, marginTop: 20, marginBottom: 10}}>
                        {displayPlaces &&
                            <FlatList
                                data={displayPlaces}
                                renderItem={({ item: place }: {item: any}) => (
                                    <CardComponent place={place} style={{width: 250, marginRight: 10}} />
                                )}
                                keyExtractor={(place) => place.name}
                                horizontal={true}
                            />
                        }
                    </View>
                    {/* Section Mais Visitados */}
                    <SectionTitle citySelected={selectedCity} categorySelectd={selectedCategory} title='Mais Visitados'/>
                    <View style={{height: 320, marginTop: 20, marginBottom: 10}}>
                        {displayPlaces &&
                            <FlatList
                                data={displayPlaces}
                                renderItem={({ item: place }: {item: any}) => (
                                    <CardComponent place={place} style={{width: 250, marginRight: 10}} />
                                )}
                                keyExtractor={(place) => place.name}
                                horizontal={true}
                            />
                        }
                    </View>
                    
                    {/* Section Sair */}
                    <Text style={{color: mainColor, fontWeight: 'bold', fontSize: 20}}>Sair</Text>
                    <View style={{marginTop: 20, marginBottom: 40, alignItems: 'center'}}>
                        <TouchableOpacity style={{backgroundColor: mainColor, width: '50%', padding: 10, borderRadius: 10}} onPress={handleLogout}>
                            <Text style={{fontWeight: 500, color: 'white', textAlign: 'center'}}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </Fragment>
            }
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
