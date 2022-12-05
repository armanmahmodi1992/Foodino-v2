import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, OrdersScreen } from '~/screens';
export type CartStackParamList = { CartScreen: any; OrdersScreen: any };
export default function CartStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'CartScreen'}
                component={CartScreen}
            />
            <Stack.Screen
                name={'OrdersScreen'}
                component={OrdersScreen}
            />

        </Stack.Navigator>
    );
}