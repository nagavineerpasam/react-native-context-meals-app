import { useNavigation } from '@react-navigation/native';
import {
    Image, Platform, Pressable, StyleSheet, Text, View,
} from 'react-native';

function MealItem({ mealItem }) {
    const mealItemObj = mealItem;
    const {
        imageUrl, title, duration, complexity, affordability, mealId,
    } = mealItemObj;
    const navigation1 = useNavigation();
    // another of doing it using useNavigation
    const pressHandler = () => {
        // navigation.navigate('OVERVIEW');
        navigation1.navigate('DETAILS', {
            mealId,
        });
    };
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed && styles.buttonPressed}
                onPress={pressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}
export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        margin: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 15,
    },
});
