import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export interface CardComponentProps {
    img: string,
    name: string,
    description: string,
    width: number
}

export function CardComponent (props: CardComponentProps) {
    return (
        <View style={[{ width: props.width }, styles.card ]}>
            <TouchableOpacity style={{height: '100%'}}>
                <Image style={styles.cardImg} src={props.img}></Image>
                <Text style={styles.cardName}>{props.name}</Text>
                <Text style={styles.cardDescription}>{props.description}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        pointerEvents: 'none',
        backgroundColor: 'white',
        borderColor: '#f3f3f3',
        borderWidth: 1,
        height: 300,
        marginRight: 10,
        padding: 10,
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