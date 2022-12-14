import { HStack, Select, VStack, FormControl } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '~/component'
import { navigate } from '~/navigation/Methods'
import { Colors } from '~/style'
import { fontWeight } from '~/utils/Style'
import { useForm, Controller } from "react-hook-form";


export default function FurtherInformation() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            address: '',
            delivery: '',
            payment: '',
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <View style={styles.container}>
            <VStack w='100%' h='100%' backgroundColor={Colors.PRIMARY_LIGHT} m='6' borderRadius='10' p='5' space='6' >

                <Text style={styles.header}>آدرس</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Select width="100%"
                            placeholder='شهر'
                            selectedValue={value}
                            onValueChange={(itemValue: string) => {
                                onChange(itemValue)
                            }}
                        >
                            <Select.Item label="سقز" value="saghez" />
                        </Select>
                    )}
                    name="address"
                />


                <Text style={styles.header}>روش ارسال</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Select width="100%"
                            placeholder='روش ارسال'
                            selectedValue={value}
                            onValueChange={(itemValue: string) => {
                                onChange(itemValue)
                            }}
                        >
                            <Select.Item label="حضوری" value="inPerson" />
                            <Select.Item label="پیک" value="delivery" />
                        </Select>
                    )}
                    name="delivery"
                />

                <Text style={styles.header}>روش پرداخت</Text>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Select width="100%"
                            placeholder='روش پرداخت'
                            selectedValue={value}
                            onValueChange={(itemValue: string) => {
                                onChange(itemValue)
                            }}
                        >
                            <Select.Item label="نقدی" value="cash" />
                        </Select>
                    )}
                    name="payment"
                />

                <HStack space='4' justifyContent='center' pt='10'>
                    <CustomButton
                        onPress={() => navigate('CartScreen')}
                        title='انصراف'
                        buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                    />
                    <CustomButton
                        onPress={handleSubmit(onSubmit)}
                        title='ثبت'
                        buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                    />
                </HStack>

            </VStack>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        paddingTop: 15,
        paddingBottom: 50,
    },
    header: {
        fontSize: 17,
        fontWeight: fontWeight.black
    }
})
