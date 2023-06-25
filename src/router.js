import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack"; //Insert screens into a stack
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // TabBar

import HomeScreen from "../src/screens/MainScreens/HomeScreen/HomeScreen";
import AddItem from "./screens/MainScreens/AddItemScreen/AddItemScreen";
import LoginScreen from "./screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/Auth/RegistrationScreen/RegistrationScreen";
import InitialScreen from "./screens/MainScreens/InitialScreen/InitialScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { signOut } from "./shared/api/api-auth";
import Header from "./shared/components/Header/Header";

// createStackNavigator is used to create a stack like structure.
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button,
//the screen pops off from the top of the stack.

// Inside the render function, we have added NavigationContainer components.

// Then we have added the Stack.Navigator component inside the NavigationContainer component.
// stack.Navigator contains all the screens using stack.Screen component.
// It has multiple props. For now, we are using two props i.e. name and component.

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator(); // For tabBar

export default function UseRoute(isAuth) {
  const [backBtnVisibility, setBackBtnVisibility] = useState(false);
  const [searchBtnVisibility, setSearchBtnVisibility] = useState(true);

  //for customizing registration button:
  const LogoutButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={{ padding: 5 }}>
      <Text
        style={{
          color: "#153759",
          fontWeight: "700",
          fontSize: 16,
        }}
      >
        Logout
      </Text>
    </TouchableOpacity>
  );

  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Initial"
          component={InitialScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Header
              name="Home"
              showSearchBtn={searchBtnVisibility}
              showBackBtn={backBtnVisibility}
            />
          ),
          // headerRight: () => (
          //     <LogoutButton onPress={() => signOut()} />
          // ),
          headerStyle: {
            height: 120,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("../assets/home.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Add Item" component={AddItem} />
    </Tab.Navigator>
  );
}
