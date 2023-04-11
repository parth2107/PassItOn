import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import db from "../../firebase/config";

import UseRoute from "../../router";

export default function Main() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        db.auth().onAuthStateChanged((user) => {
          setUser(user);
        });
      }, []);

    const isLogin = db.auth().currentUser ? true : false;

    const routing = UseRoute(isLogin);
      
    return (
        <NavigationContainer>
            {routing}
        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});