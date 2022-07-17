import {
    FlatList, StyleSheet, View, SafeAreaView, Text, TouchableOpacity,
} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
// import { getUsers, getUsers2 } from '../api';

function CategoriesScreens({ navigation }) {
    const ref = useRef(null);
    useScrollToTop(ref);
    const renderCategoryItem = ({ item }) => {
        const pressHandler = () => {
            navigation.navigate('OVERVIEW', {
                categoryId: item.id,
            });
        };
        return (
            <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />
        );
    };
    return (
        <SafeAreaView>
            <View>
                <View style={{ width: 70 }}>
                    <TouchableOpacity>
                        <View style={styles.header}>
                            <Text style={styles.mainText}>HOME</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        ref={ref}
                        data={CATEGORIES}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCategoryItem}
                        numColumns={2}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        width: 70,
        height: 40,
        borderColor: '#E0DECA',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
    },
    mainText: {
        // flex: 1,
        flexDirection: 'row',
        padding: 12,
        color: '#1F4690',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreens;

// const getUserList = () => {
//     const formData = new FormData();
//     formData.append('propertyId', 229130);
//     getUsers2(formData).then((res) => {
//         console.log(res.data);
//     }).catch((ex) => {
//         console.log(ex);
//         Alert.alert('Error g etting data user data');
//         // ToastAndroid.showWithGravity(
//         //     'Error',
//         //     ToastAndroid.LONG,
//         //     ToastAndroid.CENTER,
//         // );
//     });
// };
// useEffect(() => {
//     getUserList();
// }, []);
