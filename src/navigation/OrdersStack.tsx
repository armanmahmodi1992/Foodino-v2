import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '~/screens';
import { CustomHeader } from '~/component';
export type OrdersStackParamList = { OrdersScreen: undefined };
const Stack = createNativeStackNavigator();

export default function OrdersStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'OrdersScreen'}
                component={OrdersScreen}
                options={
                    {
                        headerTitle: ' سفارشات',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />

        </Stack.Navigator>
    );
}