import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import {AntDesign} from 'react-native-vector-icons';
import CardList from '../CardList/CardList';
import {data, data1} from '../constant';


export default function SearchUser() {
  return (
    <View>
        <Text style={styles.title}>Hi, {'Benjamin'}</Text>
        <Text style={styles.subtitle}>{'What are you hungry for today ?'}</Text>
        <View style={styles.textInputContainer}>
            <AntDesign name="search1" color={'#262626'} size={25} style={{marginLeft: 10}}/>
            <TextInput style={styles.input}
            placeholder={'Search for the kitchens or dishes'} placeholderTextColor="#232b2b" />
         </View>
         <Text style={styles.title}>{'Order Again'}</Text>

         <CardList data={data}/>

         <Text style={styles.title}>{'Popular Dishes'}</Text>
         <CardList data={data1}/>
    </View>
  )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20, 
        color: '#555d50', 
        fontFamily: 'RobotoBold', 
        letterSpacing: 1.5
    },
    subtitle : {
        fontSize: 25, 
        color: '#232b2b', 
        fontFamily: 'RobotoMedium', 
        letterSpacing: 1,
        paddingRight: 20,
        lineHeight: 30,
        marginTop: 10
    },
    textInputContainer: {
        backgroundColor: '#e5e5e5',
        height: 45,
        justifyContent:'center',
        marginVertical: 20,
        elevation: 5,
        borderRadius: 5,
        width: '100%',
        position: 'relative'
    },
    input: {
        width: '85%',
        height: 50,
        position:'absolute',
        left: 45,
        fontSize: 16,
        fontFamily: 'RobotoMedium'
    }
})
