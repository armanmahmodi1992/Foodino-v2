import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomImage } from '~/component'
import { navigate } from '~/navigation/Methods';
import { useTheme } from '@react-navigation/native';
import { fontFamily, fontWeight, scale } from '~/utils/Style';

export default function HomeCard({ item }: { item: any }) {

    const { colors } = useTheme();
    let restaurantList = item?.restaurants
    let food_list = item?.food_list

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate('RestaurantList', { restaurantList, food_list })} style={styles.touchableOpacity} activeOpacity={0.7} >
                <CustomImage imageSource={item?.pic} style={styles.image} resizeMode='cover' />
            </TouchableOpacity >
            <Text style={[styles.textCard, { color: colors.WHITE }]}>{item?.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 6,
        marginTop: 5,
    },
    textCard: {
        fontFamily: fontFamily.bold,
        fontWeight: fontWeight.heavy,
        fontSize: 35,
        marginTop: 75,
        marginRight: 10,
        alignSelf: 'center',
        position: 'absolute'
    },
    touchableOpacity: {
        height: scale(170),
        width: scale(170),
        margin: 1,
        marginTop: 2,
        alignSelf: 'center'
    },
    image: {
        width: scale(170),
        height: scale(170),
        borderRadius: 20,
        overflow: 'hidden'
    }
})