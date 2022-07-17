import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreens from './Screens/CategoriesScreen';
import MealsOverView from './Screens/MealsOverView';
import MealItemDetails from './Screens/MealItemDetails';
import FavouriteScreen from './Screens/FavouriteScreen';
import FavContextProvider from './store/context/fav-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HOMESCREEN" component={CategoriesScreens} options={{ headerShown: false }} />
            <Stack.Screen name="OVERVIEW" component={MealsOverView} />
            <Stack.Screen name="DETAILS" component={MealItemDetails} />
        </Stack.Navigator>
    );
}

export default function App() {
    const homeTabOptions = { tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> };
    const favTabOptions = { tabBarIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} /> };
    return (
        <>
            <StatusBar style="dark" />
            <FavContextProvider>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{ headerShown: false }}>
                        <Tab.Screen name="HOME" component={HomeNavigator} options={homeTabOptions} />
                        <Tab.Screen name="Favourite" component={FavouriteScreen} options={favTabOptions} />
                    </Tab.Navigator>
                </NavigationContainer>
            </FavContextProvider>
        </>
    );
}

// const Drawer = createDrawerNavigator();

// function DrawNavigator() {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen
//                 name="HOME"
//                 component={CategoriesScreens}
//                 options={{
//                     title: 'HOME',
//                     drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
//                 }}
//             />
//             <Drawer.Screen
//                 name="Favourite"
//                 component={FavouriteScreen}
//                 options={{
//                     drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
//                 }}
//             />
//         </Drawer.Navigator>
//     );
// }
