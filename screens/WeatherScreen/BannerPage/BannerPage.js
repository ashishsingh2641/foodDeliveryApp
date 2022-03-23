import { View, Text, ImageBackground,Image, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {LinearGradient} from "expo-linear-gradient";
import Button from '../../../components/Button';
import { TouchableRipple } from 'react-native-paper';
import WModal from '../../../components/WModal';
import { NavigationContainer } from '@react-navigation/native';

export default function BannerPage(props) {
    const [modalVisible, setVisible] = useState(false);
    const handleModal = () => {
        setVisible(true);
    }
    const handleClose = () => {
        setVisible(false)
    }
  return (
    <>
    <ImageBackground source={require('../../../assets/mainScreen.jpg')} resizeMode="cover" style={{
        flex: 1,
        justifyContent: "center", alignItems: 'center',marginHorizontal: -20,
        marginTop: -35
    }}>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, .7)' }}></View>
        <View style={{flex: 3, alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../../../assets/apple-touch-icon.png')}  style={{width: 150, height: 150, resizeMode:'contain'}}/>
        </View>    
        <LinearGradient 
                colors={['#00000000', '#000000']} 
                style={{height : '100%', width : '100%', flex: 1, alignItems:'center'}}>
                <Text style={styles.title}>Eat home-made</Text>
                <Text style={{...styles.title, lineHeight: 30, paddingBottom: 10}}>healthy Indian Food</Text>
                <Button backgroundColor='rgba(232, 39, 40, .9)' width={220} text="START EXPLORING"
                onPress={props.onPress}/>
            <Text style={{paddingBottom: 5, fontSize: 16, fontFamily: 'RobotoMedium', color:'white'}}>ALREADY HAVE AN ACCOUNT?</Text>
            <TouchableRipple
             rippleColor="rgba(255, 255, 255, .32)"
             onPress={props.handleNavigation}>
            <Text style={{paddingBottom: 10, fontSize: 16, fontFamily: 'RobotoMedium', borderBottomColor: 'yellow', borderBottomWidth: 1, color:'yellow'}}>LOG IN HERE</Text>
            </TouchableRipple>
        </LinearGradient>
        {modalVisible === true ? (<WModal modalVisible={modalVisible} handleModal={handleModal} handleClose={handleClose}>
            </WModal>) : <></>}
    </ImageBackground>
  
    </>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: 'RobotoBold',
        letterSpacing: 1,
        color: 'white'
    }
})