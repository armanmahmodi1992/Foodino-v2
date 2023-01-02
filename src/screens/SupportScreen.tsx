import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { VStack } from 'native-base';
import { Style } from '~/utils';
import { Colors } from '~/style';

export default function SupportScreen() {
    return (
        <VStack flex={1} px='3'>
            <Text style={styles.text}>
                شماره تلفن جهت پشتیبانی ، دریافت شکایات و ارایه پیشنهادات
            </Text>
            <Text style={styles.number}>
                09184163097
            </Text>

        </VStack>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: Style.scale(16),
        fontWeight: Style.fontWeight.bold,
        marginTop: 10,
        lineHeight: 35,
        color: Colors.GARY_1,
    },
    number: {
        fontSize: Style.scale(16),
        marginTop: 10,
        fontFamily: Style.fontFamily.number,
        color: Colors.GARY_1,

    }
})