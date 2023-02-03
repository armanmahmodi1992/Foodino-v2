import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { VStack } from 'native-base';
import { Style } from '~/utils';
import { useTheme } from '@react-navigation/native';
import { CustomContainer } from '~/component';

export default function SupportScreen() {

    const { colors } = useTheme();

    return (
        <CustomContainer>
            <VStack flex={1} px='3'>
                <Text style={[styles.text, { color: colors.GARY_1 }]}>
                    شماره تلفن جهت پشتیبانی ، دریافت شکایات و ارایه پیشنهادات
                </Text>
                <Text style={[styles.number, { color: colors.GARY_1 }]}>
                    09184163097
                </Text>
            </VStack>
        </CustomContainer>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: Style.scale(16),
        fontWeight: Style.fontWeight.bold,
        marginTop: 10,
        lineHeight: 35
    },
    number: {
        fontSize: Style.scale(16),
        marginTop: 10,
        fontFamily: Style.fontFamily.number,

    }
})