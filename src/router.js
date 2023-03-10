import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // TabBar

import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import AddItem from '../src/screens/AddItemScreen/AddItemScreen';

// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator(); // For tabBar

export default function Route() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Add Item"
                component={AddItem}
            />
        </Tab.Navigator>
    );
}

