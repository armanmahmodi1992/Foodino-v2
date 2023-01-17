import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CustomHeader } from '~/component';
import {
    AboutApplicationScreen,
    DeliveryScreen,
    EditScreen,
    PaymentMethodsScreen,
    SettingScreen,
    SupportScreen,
    UserScreen
} from '~/screens';

export type ProfileStackParamList = {
    UserScreen: any;
    SettingScreen: any;
    EditScreen: any;
    AboutApplicationScreen: any;
    PaymentMethodsScreen: any;
    DeliveryScreen: any;
    SupportScreen: any
};

const Stack = createNativeStackNavigator();

export default function ProfileStackNavigator() {

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='UserScreen'>

            <Stack.Screen
                name={'UserScreen'}
                component={UserScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name={'SettingScreen'}
                component={SettingScreen}
                options={
                    {
                        headerTitle: ' تنظیمات',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'EditScreen'}
                component={EditScreen}
                options={
                    {
                        headerTitle: 'ویرایش اطلاعات',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'AboutApplicationScreen'}
                component={AboutApplicationScreen}
                options={
                    {
                        headerTitle: 'درباره فودینو',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'PaymentMethodsScreen'}
                component={PaymentMethodsScreen}
                options={
                    {
                        headerTitle: 'روشهای پرداخت',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'DeliveryScreen'}
                component={DeliveryScreen}
                options={
                    {
                        headerTitle: 'روشهای ارسال',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'SupportScreen'}
                component={SupportScreen}
                options={
                    {
                        headerTitle: 'پشتیبانی',
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