import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CustomTextField(props) {
    const {
        title,
        placeholder,
        value,
        onChangeText,
        secureTextEntryStart,
    } = props;

    const [secureTextEntry, setSecureTextEntry] = useState(secureTextEntryStart);

    return (
        <View style={{ position: "relative", width: "100%", marginBottom: 15 }}>
            <Text>{title}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={style.input}
            />
        </View>
    )

}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
})
