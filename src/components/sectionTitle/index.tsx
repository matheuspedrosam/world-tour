import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { mainColor } from '../../styles';
import { Icon } from '@rneui/base';
import { Link } from 'expo-router';

export interface SectionTitleProps {
    title: string
    citySelected: string,
    categorySelectd: string
}

export function SectionTitle ({ title, citySelected, categorySelectd }: SectionTitleProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Link href={{pathname: "/allPlaces", params: {city: citySelected, category: categorySelectd}}}>
                <TouchableOpacity style={styles.seeMoreContainer}>
                    <Text style={{marginBottom: 2}}>Ver todos</Text>
                    <Icon name='keyboard-arrow-right'/>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    seeMoreContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        pointerEvents: 'none'
    },
    title:{
        color: mainColor, 
        fontWeight: 'bold', 
        fontSize: 20
    }
});
