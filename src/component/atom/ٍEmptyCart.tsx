import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { image, Style } from '~/utils';

export default function EmptyCart() {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Image source={{ uri: image.noCart }} style={{ width: 200, height: 200 }} />
            <Text style={[styles.text, { color: colors.GARY_1 }]}>سبد خرید شما خالی است.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        marginTop: 10,
        fontFamily: Style.fontFamily.bold,
    }

});