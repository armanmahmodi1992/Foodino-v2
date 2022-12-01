import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, FoodMenuScreen } from '~/screens';
export type HomeStackParamList = { HomeScreen: undefined; FoodMenuScreen: { subset: string } };
export default function HomeStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
            />
            <Stack.Screen
                name={'FoodMenuScreen'}
                component={FoodMenuScreen}
            />


        </Stack.Navigator>
    );
}