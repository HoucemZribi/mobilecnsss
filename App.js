/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text } from "react-native";

import Navigation from "./src/navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={"#4f9c2e"} />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
