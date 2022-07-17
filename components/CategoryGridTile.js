import {
    Platform,
    Pressable, StyleSheet, Text, View,
} from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.girdItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    girdItem: {
        flex: 1,
        margin: 16,
        height: 200,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.9,
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default CategoryGridTile;
