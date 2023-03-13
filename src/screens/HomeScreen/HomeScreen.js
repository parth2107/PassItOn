//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'; // importing components

// RN Code
const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}{item.label}</View>;
};

export default function HomeScreen() {
    return(
      <View style={styles.app}>
      <FlatList
        data={gridItems}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
    </View>
    );
}

const gridItems = [
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require('../../../assets/book.png')}
      />
    ),
    label: (
      <Text style={{ marginTop: 15, color: 'gray' }}>Books</Text>
    ),
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require('../../../assets/note.png')}
      />
    ),
    label: (
      <Text style={{ marginTop: 15, color: 'gray' }}>Notes</Text>
    ),
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require('../../../assets/ppt.png')}
      />
    ),
    label: (
      <Text style={{ marginTop: 15, color: 'gray' }}>Presentations</Text>
    ),
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require('../../../assets/stationary.png')}
      />
    ),
    label: (
      <Text style={{ marginTop: 15, color: 'gray' }}>Stationary</Text>
    ),
  },
];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    app: {
      flex: 4, // the number of columns you want to devide the screen into
    },
    item: {
      flex: 1,
      maxWidth: "50%", // 100% devided by the number of rows you want
      alignItems: "center",
      // my visual styles; not important for the grid
      padding: 40,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      margin: 10
    }
  });