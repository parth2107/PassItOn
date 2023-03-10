import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

import InitialScreen from './src/screens/InitialScreen/InitialScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.

const Stack = createStackNavigator();

// Inside the render function, we have added NavigationContainer components.

// Then we have added the Stack.Navigator component inside the NavigationContainer component.
// stack.Navigator contains all the screens using stack.Screen component. 
// It has multiple props. For now, we are using two props i.e. name and component.

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Define our routes*/}
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}