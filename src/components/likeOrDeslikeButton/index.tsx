import { Icon } from '@rneui/base';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export interface LikeOrDeslikeButtonProps {
}

export function LikeOrDeslikeButton (props: LikeOrDeslikeButtonProps) {
    return (
        <View style={styles.container}>

            <View style={styles.buttonsContainer}>
                {/* Deslike */}
                <TouchableOpacity><Icon name='thumb-down' containerStyle={styles.icons} size={20} /></TouchableOpacity>
                {/* Divisor */}
                <View style={styles.divisor}/>
                {/* Like */}
                <TouchableOpacity><Icon name='thumb-up' containerStyle={styles.icons} size={20} /></TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonsContainer:{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        position: 'relative'
    },
    icons: {
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    divisor: {
        width: 1,
        height: 32,
        left: '49%',
        backgroundColor: 'black',
        position: 'absolute'
    }
});
