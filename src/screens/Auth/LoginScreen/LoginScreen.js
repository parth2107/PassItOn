import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { initialState } from "./initialState";
import useForm from "../../../shared/hooks/useForm";
import { signIn } from "../../../shared/api/api-auth";
import Spinner from "../../../shared/components/Spinner/Spinner";

import db from "../../../firebase/config";
import Notification from "../../../shared/components/Notification/Notification";

export default function LoginScreen({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await signIn({ ...data});
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // use custom hook
    const { state, handleChangeTextInput, handleSubmit } = useForm({
        initialState,
        onSubmit,
    });

    const { email, password } = state;
    
    return (
        <>
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => handleChangeTextInput(text, "email")}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => handleChangeTextInput(text, "password")}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Registration"); }}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
            {loading && <Spinner bool="false" size="large" color="grey" />}
            {error && <Notification text={error.message} type="error" />}
        </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#078289',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#078289',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#078289',   
        fontWeight: '700',
        fontSize: 16,
    },
})