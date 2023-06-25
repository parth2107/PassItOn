import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import useForm from "../../../shared/hooks/useForm";
import { signUp } from "../../../shared/api/api-auth";
import { initialState } from "./initialState";
import Spinner from "../../../shared/components/Spinner/Spinner";
import Notification from "../../../shared/components/Notification/Notification";
import CustomTextField from "../../../shared/components/CustomTextField/CustomTextField";
import Title from "../../../shared/components/Title/Title";

export default function RegistrationScreen({ navigation }) {
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
  const SignUpButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.btnLogin}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );

  const {
    name,
    collegeOrUniversity,
    email,
    yearOfPassing,
    city,
    password,
    confirmPassword,
  } = state;

  return (
    <ScrollView>
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
            <Title text="Sign up" />
          </View>
          <CustomTextField
            placeholder="Full Name"
            title="Full Name"
            value={name}
            onChangeText={(text) => handleChangeTextInput(text, "name")}
          />
          <CustomTextField
            placeholder="Email"
            title="Email"
            value={email}
            onChangeText={(text) => handleChangeTextInput(text, "email")}
          />
          <CustomTextField
            placeholder="College/University"
            title="College/University"
            value={collegeOrUniversity}
            onChangeText={(text) =>
              handleChangeTextInput(text, "collegeOrUniversity")
            }
          />
          <CustomTextField
            placeholder="Year of Passing"
            title="Year of Passing"
            value={yearOfPassing}
            onChangeText={(text) =>
              handleChangeTextInput(text, "yearOfPassing")
            }
          />
          <CustomTextField
            placeholder="City"
            title="City"
            value={city}
            onChangeText={(text) => handleChangeTextInput(text, "city")}
          />
          <CustomTextField
            placeholder="Password"
            title="Password"
            value={password}
            onChangeText={(text) => handleChangeTextInput(text, "password")}
            secureTextEntryStart={true}
          />
          <CustomTextField
            placeholder="Confirm Password"
            title="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) =>
              handleChangeTextInput(text, "confirmPassword")
            }
            secureTextEntryStart={true}
          />
          <SignUpButton
            title="Sign up"
            size="sm"
            onPress={handleSubmit}
          ></SignUpButton>
        </View>
        {loading && <Spinner bool="false" size="large" color="grey" />}
        {error && <Notification text={error.message} type="error" />}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  backButton: {
    height: 32,
    width: 32,
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
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 40,
  },
  //text in btn
  btnText: {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },
});
