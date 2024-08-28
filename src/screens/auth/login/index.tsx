import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import logo from "../../../assets/imgs/logo-2.png"
import { Button, CheckBox, Icon } from '@rneui/base';
import { mainColor } from '../../../styles';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    return (
        <View style={styles.mainContentContainer}>
            <Text>Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {

    }
});
