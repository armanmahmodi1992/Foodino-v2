import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, FurtherInformation } from '~/screens';
import { CustomHeader } from '~/component';
export type CartStackParamList = { CartScreen: any; FurtherInformation: any };
export default function CartStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'CartScreen'}
                component={CartScreen}
                options={
                    {
                        headerTitle: ' سبد خرید',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'FurtherInformation'}
                component={FurtherInformation}
            />

        </Stack.Navigator>
    );
}