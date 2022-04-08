import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import avantage from "../../../assets/images/avantage.jpg";


const Emp3 = () => {
    const { height } = useWindowDimensions();
    const onList = () => {
        console.warn("Liste Debit");
    };
    const onHist = () => {
        console.warn("Historique");
    };
    return (
        <View style={styles.root}>
            <Ionicons name="ios-clipboard-outline" size={70} style={styles.icon} onPress={onList} />
            <TouchableOpacity onPress={() => console.warn("hist")}>
                <Image
                    source={avantage}
                    onPress={onHist}
                    style={[styles.hist, { height: height * 0.07 }]}
                    resizeMode="stretch"

                />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({

    icon: {

        color: "black",
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
        justifyContent: 'center',
        paddingTop: 30,
        paddingLeft: 70,
        paddingRight: 60,
    },


});
export default Emp3