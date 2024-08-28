import { View, Pressable, Image, StyleSheet } from 'react-native';
import PagerView from "react-native-pager-view"
import * as React from 'react';
import { useState } from 'react';

export interface BannerProps {

}

export function Banner (props: BannerProps) {
    return (
        <View style={styles.defaultSize}>
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        
            <Pressable 
                key="1"
                onPress={() => console.log("Nothing")}
            >
                <Image
                    style={styles.defaultSize}
                    src='https://maceioalgovbr.dhost.cloud/uploads/imagens/WhatsApp-Image-2022-01-08-at-14.26.58.jpeg'
                />
            </Pressable>
        
            <Pressable 
                key="2"
                onPress={() => "Nothing"}
            >
                <Image
                    style={styles.defaultSize}
                    src='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3179560:1641929639/Maceio.jpg?f=default&$p$f=1bc4f03'
                />
            </Pressable>
        
            </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultSize:{
        width: '100%',
        height: 300,
        borderRadius: 20
    }
});