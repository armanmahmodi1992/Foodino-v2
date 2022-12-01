import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { navigate } from '~/navigation/Methods';
import { fontFamily } from '~/utils/Style';

export default function HomeCard({ item }: { item: any }) {
    let subset = item?.subset
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate('FoodMenuScreen', { subset })} style={styles.touchableOpacity} >
                <Image source={{ uri: item?.pic }} style={styles.image} />
            </TouchableOpacity >
            <Text style={styles.textCard}>{item?.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingBottom: 10,

    },
    textCard: {
        fontFamily: fontFamily.bold,
        fontSize: 20,
        marginTop: 3,
        marginRight: 10
    },
    touchableOpacity: {
        height: 210,
        width: 385,
        margin: 1,
        marginTop: 2,
        alignSelf: 'center'
    },
    image: {
        width: 385,
        height: 210,
        borderRadius: 20
    }
})