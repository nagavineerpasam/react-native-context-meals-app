import { useLayoutEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverView({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0);
    useLayoutEffect(() => {
        const displayedTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: displayedTitle,
        });
    }, [catId, navigation]);
    const renderItem = ({ item }) => {
        const mealItem = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            catId,
            mealId: item.id,
        };
        return (
            <MealItem mealItem={mealItem} navigation={navigation} />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
    );
}
export default MealsOverView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
