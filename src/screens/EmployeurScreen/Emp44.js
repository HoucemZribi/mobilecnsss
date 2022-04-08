import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, Alert } from 'react-native';
import React from 'react';



const Emp44 = () => {
    const { height } = useWindowDimensions();
    const onList = () => {
        console.warn("Liste Debit");
    };
    const onHist = () => {
        console.warn("Historique");
    };
    return (
        <View style={styles.root}>
            <Text style={styles.icon}> Réclamation</Text>
            <Text style={styles.hist}>Paiment</Text>
        </View>
    );
};
const styles = StyleSheet.create({

    icon: {

        color: "black",
        flex: 1,
        padding: 70,
        paddingTop: 0.007,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#051C60',



    },
    hist: {
        color: "black",
        paddingRight: 70,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#051C60',

    },
    root: {
        flexDirection: "row",

    },


});
export default Emp44