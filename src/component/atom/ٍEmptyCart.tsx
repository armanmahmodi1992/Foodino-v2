import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '~/style';
import { image, Style } from '~/utils';

export default function EmptyCart() {
    return (

        <View style={styles.content}>
            <Image source={{ uri: image.noCart }} style={{ width: 200, height: 200, marginBottom: 20 }} />
            <Text style={styles.text}>سبد خرید شما خالی است.</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        marginTop: 10,
        fontFamily: Style.fontFamily.bold,
        color: Colors.GARY_1
    }

});