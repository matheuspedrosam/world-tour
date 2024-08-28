import { Icon } from '@rneui/base';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { mainColor } from '../../styles';

export interface HeaderProps {
}

export function Header (props: HeaderProps) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => "Nothing Yet!?"}>
            <Icon name='menu' size={30}></Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => "Nothing Yet!?"}>
            <View style={styles.notificationContainer}>
                <Icon name='notifications' size={30}></Icon>
                <View style={styles.alertNotifications}></View>
            </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 15,
        paddingHorizontal: 20,
        backgroundColor: "white",
        shadowColor: 'black',
        elevation: 10,
    },
    notificationContainer: {
        position: 'relative',
    },
    alertNotifications: {
        position: 'absolute',
        height: 6,
        width: 6,
        backgroundColor: 'red',
        right: 1,
        top: 1,
        borderRadius: 100
    }
});