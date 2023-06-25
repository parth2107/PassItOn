//important imports
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native"; // importing components
import SubTitle from "../../../shared/components/SubTitle/SubTitle";

// RN Code
const Category = ({ item }) => {
  return (
    <View style={styles.item}>
      {item.icon}
      {item.label}
    </View>
  );
};

// RN Code
const RecentItem = ({ item }) => {
  return (
    <View style={styles.recent_items}>
      {item.icon}
      {item.label}
    </View>
  );
};

export default function HomeScreen() {
  return (
    <>
      <View style={styles.categories}>
        <FlatList
          data={categoriesGrid}
          numColumns={2}
          renderItem={Category}
          keyExtractor={(item) => item.alt}
        />
      </View>
      <View
        style={{
          marginHorizontal: 16,
        }}
      >
        <SubTitle text="Recently Added" />
      </View>
      <View style={styles.app}>
        <FlatList
          data={gridItems}
          numColumns={3}
          renderItem={RecentItem}
          keyExtractor={(item) => item.alt}
        />
      </View>
    </>
  );
}

const categoriesGrid = [
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/book.png")}
      />
    ),
    label: <Text style={{ marginTop: 15, color: "#153759" }}>Books</Text>,
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/note.png")}
      />
    ),
    label: <Text style={{ marginTop: 15, color: "#153759" }}>Notes</Text>,
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/ppt.png")}
      />
    ),
    label: (
      <Text style={{ marginLeft: 0, marginTop: 15, color: "#153759" }}>
        Presentations
      </Text>
    ),
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/stationary.png")}
      />
    ),
    label: <Text style={{ marginTop: 15, color: "#153759" }}>Stationary</Text>,
  },
];

const gridItems = [
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/book.png")}
      />
    ),
    label: <Text style={{ marginTop: 15, color: "#153759" }}>Books</Text>,
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/note.png")}
      />
    ),
    label: <Text style={{ marginTop: 15, color: "#153759" }}>Notes</Text>,
  },
  {
    icon: (
      <Image
        // style={{ width: 50, height: 50 }}
        source={require("../../../../assets/ppt.png")}
      />
    ),
    label: (
      <Text style={{ marginLeft: 0, marginTop: 15, color: "#153759" }}>
        Presentations
      </Text>
    ),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categories: {
    // flex: 1, // the number of columns you want to devide the screen into
    margin: 8,
  },
  item: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    // my visual styles; not important for the grid
    paddingVertical: 55,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    margin: 8,
  },
  recent_items: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    // my visual styles; not important for the grid
    paddingVertical: 25,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    margin: 8,
  },
});
