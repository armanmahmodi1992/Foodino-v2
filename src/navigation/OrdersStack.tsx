import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DeliveredScreen, PostedScreen, PreparingScreen } from '~/screens';
import { useTheme } from '@react-navigation/native';

export type OrdersStackParamList = { PreparingScreen: undefined; PostedScreen: undefined; DeliveredScreen: undefined };

export const WIDTH = Dimensions.get('window').width / 3;

const Tab = createMaterialTopTabNavigator();

const screens = [
    {
        name: 'PreparingScreen',
        component: PreparingScreen,
        options: {
            title: 'در حال آماده سازی',
        }
    },
    {
        name: 'PostedScreen',
        component: PostedScreen,
        options: { title: 'ارسال شده' }
    },
    {
        name: 'DeliveredScreen',
        component: DeliveredScreen,
        options: { title: 'تحویل داده شده' }
    },


];

export default function OrderStack() {

    const { colors } = useTheme();

    return (
        <View flex='1' >
            <Tab.Navigator
                initialRouteName='PreparingScreen'
                backBehavior='initialRoute'
                screenOptions={({ route }) => ({
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.GARY_5
                    },

                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 15
                    },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    },
                    tabBarIcon: ({ focused, color }) => {
                        var iconName: any;
                        if (route.name === 'PreparingScreen') {
                            iconName = focused ? 'local-dining' : 'local-dining';
                        }
                        else if (route.name === 'PostedScreen') {
                            iconName = focused ? 'delivery-dining' : 'delivery-dining';
                        }
                        else if (route.name === 'DeliveredScreen') {
                            iconName = focused ? 'check' : 'check';
                        }
                        return <View ><Icon name={iconName} size={20} color={color} /></View>;
                    },
                    tabBarActiveTintColor: colors.SECONDARY,
                    tabBarInactiveTintColor: colors.GARY_3,
                })}>
                {screens.map(screen => (
                    //@ts-ignore
                    <Tab.Screen key={screen.name} {...screen} />
                ))}
            </Tab.Navigator>
        </View>

    );
}
