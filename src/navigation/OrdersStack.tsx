import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DeliveredScreen, PostedScreen, PreparingScreen } from '~/screens'
import { View } from 'native-base';
import { Dimensions } from 'react-native';
import { Colors } from '~/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export type TopTabNavigatorStackParamList = { TopTabNavigator: undefined };
export const WIDTH = Dimensions.get('window').width / 3;

const Tab = createMaterialTopTabNavigator();

const screens = [
    {
        name: 'DeliveredScreen',
        component: DeliveredScreen,
        options: { title: 'تحویل داده شده' }
    },
    {
        name: 'PostedScreen',
        component: PostedScreen,
        options: { title: 'ارسال شده' }
    },
    {
        name: 'PreparingScreen',
        component: PreparingScreen,
        options: { title: 'در حال آماده سازی' }
    }
];

export default function TopTabNavigator() {
    return (
        <View flex='1' >
            <Tab.Navigator
                initialRouteName='PreparingScreen'
                backBehavior='initialRoute'
                screenOptions={({ route }) => ({
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors.GARY_5
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
                    tabBarActiveTintColor: Colors.SECONDARY,
                    tabBarInactiveTintColor: Colors.GARY_3,
                })}>
                {screens.map(screen => (
                    //@ts-ignore
                    <Tab.Screen key={screen.name} {...screen} />
                ))}
            </Tab.Navigator>
        </View>

    );
}
