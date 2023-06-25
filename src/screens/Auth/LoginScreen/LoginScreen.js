import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { initialState } from "./initialState";
import useForm from "../../../shared/hooks/useForm";
import { signIn } from "../../../shared/api/api-auth";
import Spinner from "../../../shared/components/Spinner/Spinner";

import Notification from "../../../shared/components/Notification/Notification";
import Title from "../../../shared/components/Title/Title";
import CustomTextField from "../../../shared/components/CustomTextField/CustomTextField";

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signIn({ ...data });
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

  //for customizing registration button:
  const BackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.backButton}
        source={require("../../../../assets/left.png")}
      />
    </TouchableOpacity>
  );

  //for customizing login button:
  const LoginButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.btnLogin}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <View
            style={{
              marginTop: 70,
              marginLeft: -10,
            }}
          >
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View
            style={{
              marginTop: 36,
              marginBottom: 20,
            }}
          >
            <Title text="Login" />
          </View>
          <CustomTextField
            placeholder="Email"
            title="Email"
            value={email}
            onChangeText={(text) => handleChangeTextInput(text, "email")}
          />
          <CustomTextField
            placeholder="Password"
            title="Password"
            value={password}
            onChangeText={(text) => handleChangeTextInput(text, "password")}
            secureTextEntryStart={true}
          />
          <View style={styles.buttonContainer}>
            <LoginButton
              title="Login"
              size="sm"
              onPress={handleSubmit}
            ></LoginButton>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 70,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Registration");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
        {loading && <Spinner bool="false" size="large" color="grey" />}
        {error && <Notification text={error.message} type="error" />}
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
  },
  backButton: {
    height: 32,
    width: 32,
  },
  buttonContainer: {
    marginTop: 40,
  },
  button: {
    padding: 10,
  },
  buttonOutlineText: {
    color: "#153759",
    fontWeight: "700",
    fontSize: 16,
  },
  //for button
  btnLogin: {
    elevation: 19, //means shadow for btn
    paddingVertical: 13,
    paddingHorizontal: 12,
    backgroundColor: "#153759",
    borderRadius: 68,
    alignItems: "center",
    justifyContent: "center",
  },
  //text in btn
  btnText: {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },
});
