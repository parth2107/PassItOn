import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import useForm from "../../../shared/hooks/useForm";
import { signUp } from "../../../shared/api/api-auth";
import { initialState } from "./initialState";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";

export default function RegistrationScreen() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await signUp({ ...data });
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

    const { name, collegeOrUniversity, email, yearOfPassing, city, password, confirmPassword } = state;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Full Name"
                    value={name}
                    keyboardType="default"
                    onChangeText={text => handleChangeTextInput(text, "name")}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={text => handleChangeTextInput(text, "email")}
                    style={styles.input}
                />
                <TextInput
                    placeholder="College/University"
                    value={collegeOrUniversity}
                    keyboardType="default"
                    onChangeText={text => handleChangeTextInput(text, "collegeOrUniversity")}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Year of Passing"
                    value={yearOfPassing}
                    keyboardType="decimal-pad"
                    onChangeText={text => handleChangeTextInput(text, "yearOfPassing")}
                    style={styles.input}
                />
                <TextInput
                    placeholder="City"
                    value={city}
                    keyboardType="default"
                    onChangeText={text => handleChangeTextInput(text, "city")}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    keyboardType="visible-password"
                    onChangeText={text => handleChangeTextInput(text, "password")}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    keyboardType="visible-password"
                    onChangeText={text => handleChangeTextInput(text, "confirmPassword")}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
            {loading && <Spinner bool="false" size="large" color="grey" />}
            {error && <Notification text={error.message} type="error" />}
        </KeyboardAvoidingView>
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
})