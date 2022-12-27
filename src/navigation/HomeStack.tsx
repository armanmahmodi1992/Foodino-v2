import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, FoodMenuScreen, RestaurantList, LoginScreen } from '~/screens';
import { CustomHeader } from '~/component';
import authStore from '~/store/AuthStore';

export type HomeStackParamList = { HomeScreen: undefined; FoodMenuScreen: { food_list: any }; RestaurantList: { restaurantList: any, food_list: any } };
const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {

    const { isLogin } = authStore();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
                options={
                    {
                        headerTitle: 'صفحه اصلی',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'RestaurantList'}
                component={RestaurantList}
                options={
                    {
                        headerTitle: 'لیست رستوران ها',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }
                }
            />
            <Stack.Screen
                name={'FoodMenuScreen'}
                component={isLogin ? FoodMenuScreen : LoginScreen}
            />


        </Stack.Navigator>
    );
}