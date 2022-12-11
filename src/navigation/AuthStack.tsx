import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, UserScreen, RegisterScreen, SettingScreen } from '~/screens';

export type AuthStackParamList = { LoginScreen: any; UserScreen: any; RegisterScreen: any; SettingScreen: any };
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'LoginScreen'}
                component={LoginScreen}
            />
            <Stack.Screen
                name={'RegisterScreen'}
                component={RegisterScreen}
            />
            <Stack.Screen
                name={'UserScreen'}
                component={UserScreen}
            />
            <Stack.Screen
                name={'SettingScreen'}
                component={SettingScreen}
            />

        </Stack.Navigator>
    );
}