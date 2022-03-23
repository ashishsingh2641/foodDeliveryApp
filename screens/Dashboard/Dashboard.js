import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import Hoc from '../Hoc/Hoc';
import Button from '../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = (props) => {
    console.log(Text.defaultProps)
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require('../../assets/page-1/Waimakariri.png')} resizeMode="cover" style={{
            flex: 1, marginHorizontal: -20}}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, .9)' }}></View>
            <View style={{ alignItems: 'flex-end', justifyContent:'space-between', paddingTop: 10, flex: 1, paddingHorizontal: 20 , flex: 1}}>
                <>
                    <Text style={styles.titleText}>Get</Text>
                    <Text style={styles.titleText}>the Fastest</Text>
                    <Text style={styles.titleText}>Delivery</Text>
                    <Text style={{...styles.bodyText,marginTop: 10, marginBottom: 0 }}>Order Food and get</Text>
                    <Text style={styles.bodyText}>Delivery in Fastest time in Town</Text>
                    <Button backgroundColor={'rgba(232, 39, 40, .9)'}
                        styles={{ fontFamily: 'RobotoMedium', fontSize: 18, }}
                        width={200} text={'Get Started..'} 
                        onPress={() => props.navigation.navigate('WeatherScreen')} />
                </>
                    <Image source={require('../../assets/onlineDelivery.png')} style={{marginTop: -100, width: '100%', height: '100%', zIndex: 0 }} resizeMode="contain" />
               
            </View>
        </ImageBackground>
        </SafeAreaView>
        

    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'RobotoBold',
        lineHeight: 55,
        fontSize: 40,
        color: '#36454F',
    },
    bodyText: {
        fontSize: 18, 
        fontFamily: 'RobotoLight', 
        marginVertical: 5,
        letterSpacing: 1,
    }
})

export default Hoc(Dashboard);
