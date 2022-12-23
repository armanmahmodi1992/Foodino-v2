import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import image from '~/assets/image'
export default function EmptyOrder() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={image.emptyOrder} style={{ width: 200, height: 200 }} />
                <Text style={styles.text}>شما سفارشی ثبت نکردید</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        marginTop: 10
    }

});