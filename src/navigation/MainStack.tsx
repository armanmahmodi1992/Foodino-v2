import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '~/screens';
import { TabNavigator } from '~/navigation';
import { StatusBar } from 'native-base';
import { useTheme } from '@react-navigation/native';
import themStore from '~/store/ThemeStore';
export type MainStackParamList = { SplashScreen: undefined; TabNavigator: undefined };
export default function MainStackNavigator() {
    const { theme } = themStore();
    const { colors } = useTheme();
    const Stack = createNativeStackNavigator();
    return (
        <>
            <StatusBar barStyle={theme ? "light-content" : "dark-content"} backgroundColor={theme ? colors.PRIMARY_DARK : colors.PRIMARY_LIGHT} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen
                    name={'SplashScreen'}
                    component={SplashScreen}
                />
                <Stack.Screen
                    name={'TabNavigator'}
                    component={TabNavigator}
                />

            </Stack.Navigator>
        </>
    );
}
