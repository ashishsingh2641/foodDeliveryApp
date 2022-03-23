import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import LocationDetails from './LocationDetails';
import SearchUser from './SearchUser';

export default function HomeScreen() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{justifyContent:'center', paddingHorizontal: 15}}>
        <LocationDetails />
        <SearchUser />
      </View>
    </ScrollView>
  )
}