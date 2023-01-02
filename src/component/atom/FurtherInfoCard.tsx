import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { VStack, HStack } from 'native-base';
import { fontFamily } from '~/utils/Style';
import { Colors } from '~/style';


export default function FurtherInfoCart({ info, totalPrice }: { info: any; totalPrice: any }) {

    return (
        <VStack w='100%' h='170' alignItems='flex-end' space='3' p='2' borderWidth='2' borderColor={Colors.GARY_5} borderTopRadius='15'>
            <Text style={styles.text}>آدرس : {info?.data.address}</Text>
            <Text style={styles.text}>روش پرداخت : {info?.data.payment}</Text>
            <Text style={styles.text}>روش ارسال : {info?.data.delivery}</Text>
            <Text style={styles.text}> جمع سفارش : {totalPrice}</Text>
        </VStack>
    )
}
const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily.number,
        fontSize: 13,
        paddingTop: 1,
        paddingRight: 5,
        textAlignVertical: 'center',
        alignSelf: 'flex-end',
        marginTop: 1,
        color: Colors.GARY_1
    },
})