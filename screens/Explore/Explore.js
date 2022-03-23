import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './HomeScreen/HomeScreen';
import Hoc from '../Hoc/Hoc';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    return <HomeScreen />
}


const SettingsScreen = () => {
    return <View><Text>Settings....</Text></View>
}
const SettingsScreen1 = () => {
    return <View><Text>Settings....</Text></View>
}
const Explore = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{ marginHorizontal: -20, flex: 1, marginTop: -5 }}>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#f0edf6"
                inactiveColor="white"
                barStyle={{ backgroundColor: 'rgba(232, 39, 40, .9)' }}>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarLabel: '',
                        fontSize: 25,
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarLabel: '',
                        fontSize: 25,
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="setting" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Setting1" component={SettingsScreen1}
                    options={{
                        tabBarLabel: '',
                        fontSize: 25,
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="shoppingcart" color={color} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        </View>
        </SafeAreaView>
    );
}

export default Hoc(Explore);