import { Icon } from '@rneui/base';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface CategoriesButtonProps {
    name: string,
    selectedCategory: string,
    icon: string,
    onPress: Function
}

export function CategoriesButton (props: CategoriesButtonProps) {

    return (
        <TouchableOpacity onPress={(e) => {
            props.onPress();
        }}>
            <View style={[styles.container, {backgroundColor: props.name === props.selectedCategory ? '#33CCCC' : '#E1F4F6'}]}>
                <Icon name={props.icon}></Icon>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: "#E1F4F6",
        padding: 10,
        borderRadius: 30,
        marginRight: 10
    },
    selected:{
        backgroundColor: 'red',
    }
});
