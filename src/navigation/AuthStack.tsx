import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomHeader } from '~/component';
import authStore from '~/store/AuthStore';
import {
    LoginScreen,
    UserScreen, RegisterScreen,
    SettingScreen,
    ForgetPassword,
    EditScreen,
    AboutApplicationScreen,
    PaymentMethodsScreen,
    DeliveryScreen,
    SupportScreen
} from '~/screens';

export type AuthStackParamList = {
    LoginScreen: any;
    UserScreen: any;
    RegisterScreen: any;
    SettingScreen: any;
    ForgetPassword: any;
    EditScreen: any;
    AboutApplicationScreen: any;
    PaymentMethodsScreen: any;
    DeliveryScreen: any;
    SupportScreen: any
};

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {

    const { isLogin } = authStore();

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'LoginScreen'}
                component={isLogin ? UserScreen : LoginScreen}
                options={
                    {
                        headerTitle: 'ورود کاربر',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'RegisterScreen'}
                component={RegisterScreen}
                options={
                    {
                        headerTitle: ' ثبت نام',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'UserScreen'}
                component={UserScreen}
                options={
                    {
                        headerTitle: ' صفحه کاربر ',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader  {...{ route, options, navigation }} />
                        ),
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
                name={'ForgetPassword'}
                component={ForgetPassword}
                options={
                    {
                        headerTitle: ' فراموشی رمز',
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