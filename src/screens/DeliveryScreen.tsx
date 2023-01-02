import { VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '~/style';
import { Style } from '~/utils';

export default function DeliveryScreen() {
    return (
        <VStack flex={1} px='3'>
            <Text style={styles.text}>
                اگر رستورانی که سفارش خود را در آن ثبت کرده اید دارای پیک باشد ، در بخش ثبت نهایی می توانید ارسال با پیک را انتخاب کنید یا شخصا جهت دریافت سفارش به محل مراجعه نمایید.
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
