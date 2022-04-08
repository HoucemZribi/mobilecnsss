import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

const Emp33 = () => {
  const { height } = useWindowDimensions();
  const onList = () => {
    console.warn("Liste Debit");
  };
  const onHist = () => {
    console.warn("Historique");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.icon}> Liste Assurée</Text>
      <Text style={styles.hist}>Liste Avantage</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    color: "black",
    paddingLeft: 50,
    fontSize: 12,
    fontWeight: "bold",
    color: "#051C60",
  },
  hist: {
    color: "black",
    paddingLeft: 60,
    fontSize: 12,
    fontWeight: "bold",
    color: "#051C60",
  },
  root: {
    flexDirection: "row",
  },
});
export default Emp33;
