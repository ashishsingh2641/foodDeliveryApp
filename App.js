import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";
import RootApp from './RootApp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomFonts = {
  // MontserratBlack: require('./assets/fonts/Montserrat-Black.ttf'),
  // MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  // MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
  // MontserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
  // OpenSansMedium: require('./assets/fonts/OpenSans-Medium.ttf'),
  // OpenSans: require('./assets/fonts/OpenSans-Light.ttf'),
  RobotoRegular:  require('./assets/fonts/Roboto/Roboto-Light.ttf'),
  RobotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  RobotoMedium: require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  RobotoLight: require('./assets/fonts/Roboto/Roboto-Light.ttf')
};

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoaded] = useFonts(CustomFonts);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      await AsyncStorage.setItem('@storage_Key',  JSON.stringify(location));
    })();
  }, []);

  if (!isLoaded) {
    return <View><Text>Loading....</Text></View>;
  }
  return (<RootApp />)

}
