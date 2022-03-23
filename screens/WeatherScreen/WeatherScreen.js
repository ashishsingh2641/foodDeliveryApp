import { View, Text } from 'react-native'
import React from 'react';
import Hoc from '../Hoc/Hoc';
import BannerPage from './BannerPage/BannerPage';

const WeatherScreen = (props) => {
  return (
    <View style={{flex: 1, height: '100%',}}>
      <BannerPage onPress={() => props.navigation.navigate('Explore')} handleNavigation={() => props.navigation.navigate('Login')}/>
    </View>
  )
}

export default Hoc(WeatherScreen);
