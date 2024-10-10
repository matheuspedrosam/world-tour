import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Banner } from '../../components/placeBanner';
import { LikeOrDeslikeButton } from '../../components/likeOrDeslikeButton';
import { useLocalSearchParams } from 'expo-router';

export interface PlaceScreenProps {
}

export default function PlaceScreen (props: PlaceScreenProps) {
    const params: any = useLocalSearchParams();
    const place: any = JSON.parse(params["place"]);

    return (
        <ScrollView>
            <View style={styles.mainContentContainer}>
                {/* Banner */}
                <Banner imgs={place.imgs}/>

                {/* Descriptions */}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.heading}>{place.name}</Text>
                    <View>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam earum odio eius reiciendis dolore eligendi dolor! Deleniti non fuga molestiae! Vel similique neque voluptates magnam minima ducimus architecto voluptate harum!
                        </Text>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci saepe aliquam fuga rem ducimus quod voluptatem tenetur cupiditate labore nihil error deserunt incidunt reprehenderit non iure explicabo libero magni?
                        </Text>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci saepe aliquam fuga rem ducimus quod voluptatem tenetur cupiditate labore nihil error deserunt incidunt reprehenderit non iure explicabo libero magni?
                        </Text>

                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci saepe aliquam fuga rem ducimus quod voluptatem tenetur cupiditate labore nihil error deserunt incidunt reprehenderit non iure explicabo libero magni?
                        </Text>
                    </View>
                </View>

                {/* LikeOrDeslikeButton */}
                <LikeOrDeslikeButton/>                               
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {
        padding: 20,
        margin: 20,
        shadowColor: '#343434',
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    placeImg:{
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    descriptionContainer:{
        marginVertical: 20,
    },
    heading:{
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 28
    },
    description:{
        color: 'gray',
        marginBottom: 20,
    }
});
