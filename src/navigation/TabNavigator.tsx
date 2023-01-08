import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useUserCart } from '~/hooks';
import { AuthStack, CartStack, HomeStack, OrdersStack } from '~/navigation';
import authStore from '~/store/AuthStore';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';

const Tab = createBottomTabNavigator();

export type TabNavigatorStackParamList = { HomeStack: undefined; CartStack: undefined; AuthStack: undefined; OrdersStack: any };

export default function TabNavigator() {

    const { token, isLogin } = authStore();
    console.log('isLogin in tab navigator', isLogin)
    const id = token?.[0]?.id

    const { data } = useUserCart(id);

    const cartCount = useMemo(() => {
        let count = 0
        data?.data?.map((element: any) => {
            count += element?.number
        })
        return count
    }, [data])

    const badgeCart = cartCount == 0 ? undefined : cartCount

    return (
        <Tab.Navigator initialRouteName='HomeStack'
            backBehavior='initialRoute'
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                keyboardHidesTabBar: true,

                tabBarIcon: ({ focused, color, size }) => {
                    var iconName: any;
                    if (route.name === 'HomeStack') {
                        iconName = focused ? 'cutlery' : 'cutlery';
                    }
                    else if (route.name === 'CartStack') {
                        iconName = focused ? 'cart-plus' : 'cart-plus';
                    }
                    else if (route.name === 'َAuthStack') {
                        iconName = focused ? 'user-o' : 'user-o';
                    }
                    else if (route.name === 'OrdersStack') {
                        iconName = focused ? 'first-order' : 'first-order';
                    }
                    return <View style={styles.tabIcon}><Icon name={iconName} size={size} color={color} /></View>;
                },
                tabBarLabel: ({ focused }) => {
                    let label;
                    switch (route.name) {
                        case 'HomeStack':
                            return label = focused ? <Text style={styles.tabLabel}>صفحه اصلی</Text> : null
                        case 'CartStack':
                            return label = focused ? <Text style={styles.tabLabel}>سبد خرید </Text> : null
                        case 'َAuthStack':
                            return label = focused ? <Text style={styles.tabLabel}> صفحه کاربر </Text> : null
                        case 'OrdersStack':
                            return label = focused ? <Text style={styles.tabLabel}> سفارش </Text> : null
                    }
                    return label
                },
                tabBarActiveTintColor: Colors.SECONDARY,
                tabBarInactiveTintColor: Colors.GARY_3,
            })}
        >
            <Tab.Screen
                name={'َAuthStack'}
                component={AuthStack}
            />
            <Tab.Screen
                name={'OrdersStack'}
                component={isLogin ? OrdersStack : AuthStack}
            />
            <Tab.Screen
                name={'CartStack'}
                component={isLogin ? CartStack : AuthStack}
                options={{ tabBarBadge: badgeCart }}
            />
            <Tab.Screen
                name={'HomeStack'}
                component={HomeStack}
            />
        </Tab.Navigator >

    );
}

const styles = StyleSheet.create({
    tabIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderColor: Colors.SECONDARY,
        height: 50,
        width: 50,
        borderRadius: 25,
        top: -15,
        elevation: 1
    },
    tabLabel: {
        fontFamily: fontFamily.bold,
        color: Colors.SECONDARY
    }
});