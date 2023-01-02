import { VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '~/style';
import { Style } from '~/utils';

export default function PaymentMethodsScreen() {
    return (
        <VStack flex={1} px='3'>
            <Text style={styles.text}>
                در فودینو پس ار ثبت سفارش لازم نیست هیچ وجهی بپردازید.
                کافیست هنگام دریافت سفارش مبلغ سفارش را به مامور ارسال پرداخت یا هنگام مراجعه حضوری مبلغ را بپردازید
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
        color: Colors.GARY_1
    }
})
