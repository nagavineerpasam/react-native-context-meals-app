import { useContext } from 'react';
import {
    FlatList, Text, View, SafeAreaView,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { FavContext } from '../store/context/fav-context';

function FavouriteScreen() {
    const favMealIds = useContext(FavContext);
    const { ids } = favMealIds;
    const mealsList = MEALS.filter((meal) => ids.includes(meal.id));
    const renderItem = ({ item }) => <Text>{item.title}</Text>;
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 30, marginTop: 30 }}>
                <FlatList data={mealsList} keyExtractor={(item) => item.id} renderItem={renderItem} />
            </View>
        </SafeAreaView>
    );
}

export default FavouriteScreen;
