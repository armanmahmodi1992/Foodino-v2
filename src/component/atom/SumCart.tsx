import { StyleSheet, Text, } from 'react-native'
import React from 'react'
import { VStack, HStack } from 'native-base';
import { CustomButton } from '~/component';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
import { navigate } from '~/navigation/Methods';

export default function SumCart(props: { totalCount: number; totalPrice: number }) {
    const { totalCount, totalPrice } = props;
    return (
        <VStack w='100%' h='170' alignItems='flex-end' space='6' px='4' borderWidth='1' borderColor={Colors.GARY_5}>
            <HStack justifyContent='space-between' w='100%' borderBottomWidth='2' borderColor={Colors.GARY_5} h='42' pb='3' >
                <Text style={styles.text}>خلاصه سبد</Text>
                <Text style={styles.text}>تعداد: {totalCount}</Text>
            </HStack >
            <HStack justifyContent='space-between' w='100%' alignItems='center'>
                <Text style={styles.text}>جمع: {totalPrice} ريال</Text>
                <CustomButton title='ادامه خرید' onPress={() => navigate('FurtherInformation')} buttonStyle={{ width: 130, height: 35, backgroundColor: Colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }} />
            </HStack>
        </VStack >
    )
}
const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily.number,
        fontSize: 15,
        paddingRight: 15,
        paddingTop: 4,
        textAlignVertical: 'center',
        alignSelf: 'flex-end',
        marginTop: 3,
        color: Colors.GARY_1
    },
})