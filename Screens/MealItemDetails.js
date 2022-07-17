import { useLayoutEffect } from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFav } from '../store/redux/favReducer';
// import { FavContext } from '../store/context/fav-context';

function MealItemDetails({ route, navigation }) {
    const { mealId } = route.params;
    const mealIds = useSelector((state) => state.favReducer);
    const dispatch = useDispatch();
    const isMealFav = mealIds.includes(mealId);
    const addOrRemoveFav = () => {
        if (isMealFav) {
            dispatch(removeFav(mealId));
        } else {
            dispatch(addToFav(mealId));
        }
    };
    // const favContext = useContext(FavContext);
    // const isMealFav = favContext.ids && favContext.ids.length ? favContext.ids.includes(mealId) : false;
    // const addOrRemoveFav = () => {
    //     if (isMealFav) {
    //         favContext.removeMeal(mealId);
    //     } else {
    //         favContext.addFavMeal(mealId);
    //     }
    // };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={addOrRemoveFav} activeOpacity={0.7}>
                    <Ionicons color="blue" name={isMealFav ? 'star' : 'star-outline'} size={20} />
                </TouchableOpacity>
            ),
        });
    }, [navigation, addOrRemoveFav]);
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 10 }}>Item Details here</Text>
            <TouchableOpacity activeOpacity={0.8}>
                <Button mode="contained">ADD TO FAV</Button>
            </TouchableOpacity>
        </View>
    );
}

export default MealItemDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
