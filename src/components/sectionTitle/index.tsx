import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { mainColor } from '../../styles';
import { Icon } from '@rneui/base';

export interface SectionTitleProps {
    title: string
}

export function SectionTitle ({ title }: SectionTitleProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.seeMoreContainer} onPress={() => "Nothing"}>
                <Text style={{marginBottom: 2}}>Ver todos</Text>
                <Icon name='keyboard-arrow-right'/>
            </TouchableOpacity>
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
        gap: 5
    },
    title:{
        color: mainColor, 
        fontWeight: 'bold', 
        fontSize: 20
    }
});
