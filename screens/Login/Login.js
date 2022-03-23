import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Hoc from '../Hoc/Hoc';
import FloatingLabelInput from '../../components/Floatableinput';
import Button from '../../components/Button';

const Login = (props) => {
    const [value, setValue] = React.useState('');
    const [passwordValue, setPassword] = React.useState('');
    return (
        <ImageBackground source={require('../../assets/page-1/Waimakariri.png')} resizeMode="cover" style={{
            flex: 1,
            jusifyContent: "center", alignItems: 'center', marginHorizontal: -20
        }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, .9)' }}></View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '90%' }}>
                <Image source={require('../../assets/apple-touch-icon.png')}
                    style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                <View style={{
                    width: '100%', backgroundColor: '#fff', borderRadius: 15,
                    paddingHorizontal: 20,
                    marginTop: 20,
                    elevation: 20, height: 300,
                    alignItem: 'center', justifyContent: 'center'
                }}>
                        <FloatingLabelInput
                            label="Email"
                            value={value}
                            onChangeText={(value) => setValue(value)}
                        />
                        <FloatingLabelInput
                            label="Password"
                            value={passwordValue}
                            secureTextEntry={true}
                            onChangeText={(passwordValue) => setPassword(passwordValue)}
                        />
                        <Button backgroundColor='rgba(232, 39, 40, .9)'
                            onPress={() => props.navigation.navigate('Explore')} text="LOGIN" />
                        <TouchableOpacity style={{width: '100%', marginTop: 10}}>
                            <Text style={{color: 'rgba(232, 39, 40, .9)', textAlign:'center', fontFamily: 
                            'RobotoMedium', fontSize: 18,
                        }}>SIGN UP</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Hoc(Login);
