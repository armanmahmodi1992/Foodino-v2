import { VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Style } from '~/utils';
import { useTheme } from '@react-navigation/native';
import { CustomContainer } from '~/component';

export default function PaymentMethodsScreen() {

    const { colors } = useTheme();

    return (
        <CustomContainer>
            <VStack flex={1} px='3'>
                <Text style={[styles.text, { color: colors.GARY_1 }]}>
                    در فودینو پس ار ثبت سفارش لازم نیست هیچ وجهی بپردازید.
                    کافیست هنگام دریافت سفارش مبلغ سفارش را به مامور ارسال پرداخت یا هنگام مراجعه حضوری مبلغ را بپردازید
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
        lineHeight: 35,
    }
})
