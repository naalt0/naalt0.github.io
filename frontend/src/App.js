import React from 'react';
import { Dimensions, StyleSheet, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import SecondPage from './components/src/secondPage';

const { width, height } = Dimensions.get('window');

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <View style={[styles.section, { height }]}>
                <ImageBackground source={require('./img/background.gif')} style={styles.fullScreenBackground} resizeMode="cover">
                    <Image source={require('./img/logo.png')} style={styles.logo} />
                    <TouchableOpacity onPress={() => console.log("Pointer clicked on first page")}>
                        <Image source={require('./img/pointer.png')} style={styles.pointer} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <SecondPage />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    logo: {
        width: 200,
        height: 52,
        bottom: 290,
    },
    pointer: {
      top: 350,
      width: 59,
      height: 102,
    }
});