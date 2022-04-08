import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [newPasword, setNewPassword] = useState('');

    const onSumbitPressed = () => {
        console.warn('onSumbitPressed');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder="Code "
                    value={code}
                    setValue={setCode}

                />
                <CustomInput
                    placeholder="Enter your new password "
                    value={newPasword}
                    setValue={setNewPassword}

                />

                <CustomButton
                    text="Sumbit"
                    onPress={onSumbitPressed}
                />
                <CustomButton
                    text="Back to Sign in "
                    onPress={onSignInPress}
                    type="TERTIARY" />
            </View>
        </ScrollView >
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#FDB075'

    },
});

export default NewPasswordScreen