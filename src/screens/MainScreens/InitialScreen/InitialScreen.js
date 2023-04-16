import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import useRoute from "../../../router";

//for customizing registration button:
const RegistrationButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.btnRegister}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
);

//for customizing login button:
const LoginButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.btnLogin}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
);

export default function InitialScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageLogo}>
                <Image
                    style={{ width: 102, height: 141, marginBottom: 20, }}
                    source={require('../../../../assets/Union.png')}
                />
                <Image
                    source={require('../../../../assets/PassitOn.png')}
                />
                <Text style={{ marginTop: 15, color: 'gray' }}>Assets Sharing Platform</Text>
            </View>
            <RegistrationButton title="Register" size="sm" onPress={() => navigation.navigate('Registration')}></RegistrationButton>
            <LoginButton title="Login" size="sm" onPress={() => navigation.navigate('Login')}></LoginButton>
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
    btnRegister: {
        flex: 1,
        elevation: 19,    //means shadow for btn 
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#21DA8F',
        borderRadius: 68,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    //for button
    btnLogin: {
        flex: 1,
        elevation: 19,    //means shadow for btn 
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#153759',
        borderRadius: 68,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,

    },
    //text in btn
    btnText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '400',
        alignSelf: 'center'
    },

    imageLogo: {
        flex: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
});
