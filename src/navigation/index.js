import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmployeurScreen from '../screens/EmployeurScreen';
import OnForgotPassword from '../screens/OnForgotPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="EmployeurScreen" component={EmployeurScreen} />
                <Stack.Screen name="OnForgotPassword" component={OnForgotPassword} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;