
//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'; // importing components

export default function AddItem() {
    return(
        <View style={styles.container}>
        <Text>You are on the Add Item page</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });