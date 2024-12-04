import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import { Banner } from '../../components/placeBanner';
import { LikeOrDeslikeButton } from '../../components/likeOrDeslikeButton';
import { useLocalSearchParams } from 'expo-router';
import logoEcocharge from "../../assets/imgs/Logo Ecocharge.png"

export interface PlaceScreenProps {
}

export default function PlaceScreen (props: PlaceScreenProps) {
    const params: any = useLocalSearchParams();
    const place: any = JSON.parse(params["place"]);

    async function openLink(){
        const url = "https://ecocharge.lojavirtualnuvem.com.br/";
        try {
            const supported = await Linking.canOpenURL(url);
        
            if (supported) {
                await Linking.openURL(url); // Abre o link no navegador
            } else {
                Alert.alert("Erro", "Não foi possível abrir o link: " + url);
            }
        } catch (error) {
            console.error("Erro ao tentar abrir o link:", error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar abrir o link.");
        }
    }

    return (
        <ScrollView>
            <View style={styles.mainContentContainer}>
                {/* Banner */}
                <Banner imgs={place.imgs}/>

                {/* Descriptions */}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.heading}>{place.name}</Text>
                    <View>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam earum odio eius reiciendis dolore eligendi dolor! Deleniti non fuga molestiae! Vel similique neque voluptates magnam minima ducimus architecto voluptate harum!
                        </Text>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci saepe aliquam fuga rem ducimus quod voluptatem tenetur cupiditate labore nihil error deserunt incidunt reprehenderit non iure explicabo libero magni?
                        </Text>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci saepe aliquam fuga rem ducimus quod voluptatem tenetur cupiditate labore nihil error deserunt incidunt reprehenderit non iure explicabo libero magni?
                        </Text>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci saepe aliquam fuga rem ducimus quod voluptatem tenetur cupiditate labore nihil error deserunt incidunt reprehenderit non iure explicabo libero magni?
                        </Text>
                    </View>
                </View>

                {/* LikeOrDeslikeButton */}
                <LikeOrDeslikeButton/>                               
            </View>
            <View style={{marginTop: 20, margin: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20}}>
                    <Image source={logoEcocharge} style={{width: 75, height: 75, borderRadius: 100, borderWidth: 1, borderColor: 'gray'}}/>
                    <Text style={{fontWeight: 'bold', fontSize: 22}}>Ei, turista!</Text>
                </View>
                <Text style={{marginBottom: 5}}>Está afim de nunca deixar de registrar um momento em sua viagem?</Text>
                <Text style={{marginBottom: 5}}>Conheça, as calças ecocharge 🤩. Com carregadores embutidos e ecológicas.</Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.btnEcocharge} onPress={openLink}>
                        <Text style={{color: 'white', fontWeight: 500}}>É pra já!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {
        padding: 20,
        margin: 20,
        shadowColor: '#343434',
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    placeImg:{
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    descriptionContainer:{
        marginVertical: 20,
    },
    heading:{
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 28
    },
    description:{
        color: 'gray',
        marginBottom: 20,
    },

    btnEcocharge: {
        backgroundColor: '#00bf63',
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        marginBottom: 40,
    },
});
