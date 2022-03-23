import { View, Text, StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Foundation, MaterialIcons} from 'react-native-vector-icons';

export default function LocationDetails() {
    const [getLocation, setLocation] = useState(null);
    
    useEffect(async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            setLocation(value);
          }
        } catch(e) {
          // error reading value
        }
    }, [])
  return (
    <View style={{marginTop: 0, zIndex: 9, marginBottom: 20, marginTop: 10}}>
        <View style={{display: 'flex', flexDirection:'row'}}>
            <View>
                <Foundation name="marker" size={35} color={'rgba(232, 39, 40, .9)'}/>
            </View>
            <View style={{marginLeft: 10,}}>
                <View style={{display: 'flex', flexDirection:'row'}}>
                    <Text style={{fontSize: 14, color: '#555d50', fontFamily: 'RobotoMedium'}}>DELIVER TO</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={18} color={'#555d50'}/>
                </View>
                <View>
                    <Text style={{fontSize: 14, color: '#262626', fontFamily: 'RobotoMedium', letterSpacing: 1}}>Home.Rammurthy Nagar PUNE</Text>
                </View>
            </View>
        </View>
    </View>
  )
}