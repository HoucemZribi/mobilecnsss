import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";

const Emp2 = () => {
  const { height } = useWindowDimensions();
  const onList = () => {
    console.warn("Liste Debit");
  };
  const onHist = () => {
    console.warn("Historique");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.icon}> Liste Débit</Text>
      <Text style={styles.hist}>Historique</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    paddingLeft: 50,
    fontWeight: "bold",
    color: "#051C60",
  },
  hist: {
    color: "black",
    paddingLeft: 70,
    fontSize: 15,
    fontWeight: "bold",
    color: "#051C60",
  },
  root: {
    flexDirection: "row",
  },
});
export default Emp2;
