import { HStack, Select, VStack } from 'native-base'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton, CustomContainer } from '~/component'
import { useDeleteCart, useDeleteCartFromOrder, usePostOrder, useUserCart } from '~/hooks'
import { navigate } from '~/navigation/Methods'
import { authStore } from '~/store/AuthStore'
import { Colors } from '~/style'
import { fontWeight } from '~/utils/Style'

export default function FurtherInformation() {

    const { token } = authStore()
    const id = token?.[0]?.id

    const { data: foodCart } = useUserCart(id);
    const item = foodCart?.data

    const { mutate: mutateAddToOrder, isLoading } = usePostOrder()
    const { mutate: Delete } = useDeleteCartFromOrder()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            address: '',
            delivery: '',
            payment: '',
        }
    });

    const onSubmit = (data: any) => {

        item?.map((element: any) => {
            const input = { element, data }
            mutateAddToOrder(input, {
                onSuccess: (data) => {
                    console.log('success')
                    item?.map((element: any) => {
                        Delete(element, {
                            onSuccess: (data) => {
                                navigate('OrdersStack')
                            },
                            onError: (error) => {
                            }
                        })
                    })
                },
            })
        })
    }

    return (

        <CustomContainer isLoading={isLoading}>
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
                                <Select.Item label="سقز" value="سقز" />
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
                                <Select.Item label="حضوری" value="حضوری" />
                                <Select.Item label="پیک" value="پیک" />
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
                                <Select.Item label="نقدی" value="نقدی" />
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
        </CustomContainer>
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
