import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { VStack, HStack } from 'native-base';
import { fontFamily } from '~/utils/Style';
import { useTheme } from '@react-navigation/native';


export default function FurtherInfoCart({ info, totalPrice }: { info: any; totalPrice: any }) {

    const { colors } = useTheme();
    return (
        <VStack w='100%' h='170' alignItems='flex-end' space='3' p='2' borderWidth='2' borderColor={colors.GARY_5} borderTopRadius='15'>
            <Text style={[styles.text, { color: colors.GARY_1 }]}>آدرس : {info?.data.address}</Text>
            <Text style={[styles.text, { color: colors.GARY_1 }]}>روش پرداخت : {info?.data.payment}</Text>
            <Text style={[styles.text, { color: colors.GARY_1 }]}>روش ارسال : {info?.data.delivery}</Text>
            <Text style={[styles.text, { color: colors.GARY_1 }]}> جمع سفارش : {totalPrice}</Text>
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
    },
})