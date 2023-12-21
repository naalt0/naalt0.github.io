import React from 'react';
import { Text, Dimensions, StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SecondPage() {
    return (
        <View style={[styles.section, { height }]}>
            <ImageBackground source={require('../img/second.gif')} style={styles.fullScreenBackground} resizeMode="cover">
                <View style={styles.fineText}>
                    <Text style={[{fontSize: 25}]}>Säästyt tänä vuonna</Text>
                    <Text style={styles.fine}>n. 100€ sakoilta</Text>
                    <Text style={[{fontSize: 25}]}>joka kerta, kun saat kalan</Text>
                </View>

                <TouchableOpacity onPress={() => console.log("Pointer clicked on second page")}>
                    <Image source={require('../img/pointer.png')} style={styles.pointer} />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fineText: {
        right: 55,
        fontFamily: 'Leelawadee UI'
    },
    fine: {
        backgroundColor: '#00aeff',
        width: 180,
        fontSize: 20,
        textAlign: 'center', 
        color: '#ffffff',
        fontWeight: 'bold',
    },
    pointer: {
      top: 340,
      width: 59,
      height: 102,
    }
});