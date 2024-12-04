import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export interface CardComponentProps {
    img: string,
    name: string,
    description: string,
    width: number
}

export function CardComponent (props: any) {
    const { place, style } = props;
    if(!place) return;

    const router = useRouter();

    function handleChangePage(){
        router.push({pathname: "/place", params: {place: JSON.stringify(place)}})
    }

    return (
        <TouchableOpacity style={[styles.card, style]} onPress={handleChangePage}>
            <Image style={styles.cardImg} src={place.imgs[0]}></Image>
            <Text style={styles.cardName}>{place.name}</Text>
            <Text style={styles.cardDescription}>{place.description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '48%',
        backgroundColor: 'white',
        borderColor: '#f3f3f3',
        padding: 10,
        height: 300,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
    },
    cardImg:{
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10
    },
    cardName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    cardDescription: {
        color: 'gray',
    }
});