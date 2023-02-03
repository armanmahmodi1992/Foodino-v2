import { VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Style } from '~/utils';
import { CustomContainer } from '~/component';

export default function DeliveryScreen() {

    const { colors } = useTheme();
    return (
        <CustomContainer>
            <VStack flex={1} px='3' >
                <Text style={[styles.text, { color: colors.GARY_1 }]}>
                    اگر رستورانی که سفارش خود را در آن ثبت کرده اید دارای پیک باشد ، در بخش ثبت نهایی می توانید ارسال با پیک را انتخاب کنید یا شخصا جهت دریافت سفارش به محل مراجعه نمایید.
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
