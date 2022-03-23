import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';


const Button = (props) => {
  return (
    <TouchableRipple
        onPress={props.onPress}
        rippleColor="rgba(255, 255, 255, .32)"
        style={{
            backgroundColor: props.backgroundColor ? props.backgroundColor : 'rgba(0,0,0,.7)',
        width: props.width ?  props.width : '100%', ...styles.buttonBody}}>
        <Text style={{...styles.buttonText, ...props.styles}}>{props.text}</Text>
    </TouchableRipple>
  )
}


const styles = StyleSheet.create({
    buttonBody: {
        height: 45, 
        elevation: 30, 
        justifyContent:'center',
        alignItems:'center', 
        borderRadius: 5,
        marginVertical: 10,
        borderRadius: 20,
        zIndex: 1
    },
    buttonText: {
        color: 'white',
        fontFamily: 'RobotoMedium'
    }
})

export default Button;
