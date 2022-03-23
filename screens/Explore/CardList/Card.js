import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import { AntDesign } from 'react-native-vector-icons';
import WModal from '../../../components/WModal';
import Button from '../../../components/Button';

export default function Card(props) {
    //   console.log(props, "props")
    const [state, setState] = React.useState('');
    const [modalVisible, setModal] = React.useState(false);
    return (
   <>
   <TouchableOpacity onPress={() => {
       setState(JSON.stringify(props));
       setModal(true);
       }}>
            <View style={styles.Card}>
                <Image source={props.image1} style={styles.image} />
                <View style={styles.abView}></View>
                <View style={styles.badge}>
                    <AntDesign size={15} color={'white'} name="star" />
                    <Text style={styles.ratingText}>4.2</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Chole Kulcha</Text>
                    <Text style={styles.price}>$ 50</Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 10, color: 'rgba(0,0,0,.6)', marginTop: -5, fontFamily: 'RobotoMedium', fontSize: 16 }}>Punjabi Dish</Text>
                </View>
            </View>
        </TouchableOpacity>
       <WModal handleClose={() => setModal(false)} modalVisible={modalVisible}>
            <Image source={props.image1} style={styles.image} />
            <View style={{...styles.badge, position: 'relative'}}>
                    <AntDesign size={15} color={'white'} name="star" />
                    <Text style={styles.ratingText}>4.2</Text>
                </View>
                <View style={{...styles.textContainer, marginTop: -30}}>
                    <Text style={styles.title}>Chole Kulcha</Text>
                    <Text style={styles.price}>$ 50</Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 10, color: 'rgba(0,0,0,.6)', marginTop: -5, fontFamily: 'RobotoMedium', fontSize: 16 }}>Punjabi Dish</Text>
                </View>
                <Button backgroundColor={'rgba(232, 39, 40, .9)'}
                        styles={{ fontFamily: 'RobotoMedium', fontSize: 18, }}
                        width={200} text={'ADD TO CART'} 
                        onPress={() => setModal(false)} />
       </WModal>
</>
    )
}


const styles = StyleSheet.create({
    Card: {
        width: 250,
        height: 230,
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 25
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 150,
        marginTop: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    abView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        bottom: 80,
        backgroundColor: 'rgba(0,0,0,.3)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    badge: {
        position: 'absolute',
        width: 65,
        padding: 4,
        bottom: 100,
        right: 10,
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: 'rgba(232, 39, 40, .9)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        fontFamily: 'RobotoBold',
        fontSize: 16,
        color: "white",
        marginLeft: 10
    },
    textContainer: {
        display: 'flex',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontFamily: 'RobotoBold',
        color: 'rgba(0,0,0,.9)'
    },
    price: {
        fontSize: 20,
        fontFamily: 'RobotoMedium',
        color: 'rgba(0,0,0,.9)'
    }
})