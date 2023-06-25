import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const Header = (props) => {
  //for customizing back button:
  const BackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.backButton}
        source={require("../../../../assets/left.png")}
      />
    </TouchableOpacity>
  );

  //for customizing search button:
  const SearchButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.searchButton}
        source={require("../../../../assets/search.png")}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {props.showBackBtn && (
          <BackButton onPress={() => navigation.goBack()} />
        )}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.headerName}>{props.name}</Text>
      </View>
      <View style={styles.rightContainer}>
        {props.showSearchBtn && (
          <SearchButton onPress={() => navigation.goBack()} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  centerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "balck",
  },
  backButton: {
    height: 32,
    width: 32,
    textAlign: "left",
  },
  searchButton: {
    height: 32,
    width: 32,
    textAlign: "right",
  },
  rightContainer: {
    flex: 1,
    paddingRight: 10,
    alignItems: "flex-end",
  },
  rightElement: {
    
  },
});

export default Header;
