import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Emp4 = () => {
  const { height } = useWindowDimensions();
  const onList = () => {
    console.warn("Liste Debit");
  };
  const onHist = () => {
    console.warn("Historique");
  };
  return (
    <View style={styles.root}>
      <Ionicons name="send" size={60} style={styles.icon} onPress={onList} />
      <AntDesign name="wallet" size={60} color="green" />
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    color: "green",
    flex: 1,
    padding: 0.07,
    paddingTop: 0.07,
  },
  hist: {
    borderColor: "black",
    borderWidth: 1,
    maxWidth: 50,
    maxHeight: 50,
    padding: 32,
    paddingRight: 10,
    paddingLeft: 80,
  },
  root: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 70,
    paddingRight: 60,
  },
});
export default Emp4;
