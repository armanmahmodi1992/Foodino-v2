import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CustomHeader } from '~/component';
import { ForgetPassword, LoginScreen, RegisterScreen } from '~/screens';

export type AuthStackParamList = {
    LoginScreen: any;
    RegisterScreen: any;
    ForgetPassword: any;
}

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LoginScreen'>
            <Stack.Screen
                name={'LoginScreen'}
                component={LoginScreen}
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