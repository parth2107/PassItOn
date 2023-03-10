import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import useRoute from "../../router";

//for customizing start button:
const StartButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.btnStart}>
        <Text style={styles.startBtnText}>{title}</Text>
    </TouchableOpacity>
);

export default function InitialScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageLogo}>
                <Image
                    style={{ width: 102, height: 141, marginBottom: 20, }}
                    source={require('../../../assets/Union.png')}
                />
                <Image
                    source={require('../../../assets/PassitOn.png')}
                />
                <Text style={{ marginTop: 15, color: 'gray' }}>Assets Sharing Platform</Text>
            </View>
            <StartButton title="Start" size="sm" onPress={() => navigation.navigate('Router')}></StartButton>
        </View>
    );
}

const styles = StyleSheet.create({
    //for main view
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        // padding:16 ,
        alignContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 25
    },
    //for button
    btnStart: {
        flex: 1,
        elevation: 19,    //means shadow for btn 
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#21DA8F',
        borderRadius: 68,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 100
    },
    //text in btn
    startBtnText: {
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
        alignSelf: 'center'
    },

    imageLogo: {
        flex: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
});
