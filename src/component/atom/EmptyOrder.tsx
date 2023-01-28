import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '~/style';
import { image, Style } from '~/utils';
export default function EmptyOrder() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image.noOrder }} style={{ width: 200, height: 200 }} />
            <Text style={styles.text}>شما سفارشی ثبت نکردید</Text>
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
        color: Colors.GARY_1
    }

});