import { View, Text, StyleSheet, Image, useWindowDimensions, ImageBackground, } from 'react-native';
import React from 'react';
import Logo from "../../../assets/images/Logo_1.jpg";
import empback from "../../../assets/images/empback.jpg";

import Emp from './Emp';
import Emp2 from './Emp2';
import Emp3 from './Emp3';
import Emp33 from './Emp33';
import Emp4 from './Emp4';
import Emp44 from './Emp44';

const EmployeurScreen = () => {
    const { height } = useWindowDimensions();
    return (
        <View style={styles.root}>
            <ImageBackground source={empback} resizeMode='cover' style={styles.empbk} >
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.07 }]}
                    resizeMode="contain"
                />
                <Text style={styles.txt}>Bienvenu Employeur </Text>


                <Emp></Emp>
                <Emp2></Emp2>
                <Emp3></Emp3>
                <Emp33></Emp33>
                <Emp4></Emp4>
                <Emp44></Emp44>
            </ImageBackground>

        </View>

    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 0.1,
        paddingTop: 27,
        flex: 1,

    },
    icon: {

        color: "black",

    },
    txt: {

        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 30,
        paddingLeft: 30,

    },
    logo: {
        alignSelf: "flex-start",
        borderColor: "green",
        borderWidth: 2,
        width: "100%",
        maxWidth: 100,
        maxHeight: 200,
    },
    empbk: {

        width: "100%",
        justifyContent: "center"

    },

});

export default EmployeurScreen