import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AppBar } from '~/component'
import image from '~/assets/image'
export default function EmptyCart() {
    return (
        <View style={styles.container}>
            <AppBar title='سبد خرید' icon='shopping-cart' />
            <View style={styles.content}>
                <Image source={image.shoppingCart} style={{ width: 200, height: 200 }} />
                <Text style={styles.text}>شما محصولی انتخاب نکردید</Text>
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