import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, UserScreen, RegisterScreen, SettingScreen, ForgetPassword } from '~/screens';
import { CustomHeader } from '~/component';
import authStore from '~/store/AuthStore';

export type AuthStackParamList = { LoginScreen: any; UserScreen: any; RegisterScreen: any; SettingScreen: any; ForgetPassword: any };

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

        </Stack.Navigator>
    );
}