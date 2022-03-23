import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Dashboard from './screens/Dashboard/Dashboard';
import WeatherScreen from './screens/WeatherScreen/WeatherScreen';
import Login from './screens/Login/Login';
import Explore from './screens/Explore/Explore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootApp() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
                    <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                    <Stack.Screen name="Explore" component={Explore} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    );
}

