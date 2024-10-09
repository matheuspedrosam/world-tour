import { View, Pressable, Image, StyleSheet } from 'react-native';
import PagerView from "react-native-pager-view"

export interface BannerProps {
    // imgs: Array<string>
}

export function Banner (props: any) {
    const { imgs }: any = props;

    return (
        <View style={styles.defaultSize}>
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
            {
                imgs.map((img: any, index: any) => (
                    <Pressable 
                        key={index}
                        onPress={() => console.log("Nothing")}
                    >
                        <Image
                            style={styles.defaultSize}
                            source={{uri: img}}
                        />
                    </Pressable>
                ))
            }
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