import { HStack, Image, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { CustomButton } from '~/component';
import { useCartList, useDeleteCart, usePostCart, useSearchFoodCart, useUpdateFoodList } from '~/hooks';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';

export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const { mutate: useGetCart } = useCartList();
    const { mutate: useUpdateCart } = useUpdateFoodList()
    const { mutate: postCart } = usePostCart()
    const { mutate: Delete } = useDeleteCart()
    const { mutate: searchFoodCart } = useSearchFoodCart()
    const [cart, setCart] = useState(0)
    const { token } = authStore();


    const [{ id }] = token
    useEffect(() => {

        const input: any = { item, id }
        useGetCart(input, {
            onSuccess: (data) => {
                if (data.data != '') {
                    const [{ number }] = data?.data
                    setCart(number)
                }
            },
            onError: (error) => {
            }
        })
    }, [id])

    const handleFoodCart = (operation: string) => {
        if (operation == 'plus') {
            setCart(prevState => prevState + 1)
            item.number = cart + 1
        } else if (operation == 'minus' && cart > 0) {
            setCart(prevState => prevState - 1)
            item.number = cart - 1
        }

        const input: any = { item, id }

        useGetCart(input, {
            onSuccess: (data) => {
                if (data.data == '') {
                    postCart(input, {
                        onSuccess: (data) => {
                            console.log('success', data.status)
                        },
                        onError: (error) => {
                            console.log(error)
                        }
                    })

                }
                else if (data?.data != '' && item.number >= 0) {
                    useUpdateCart(item, {
                        onSuccess: (data) => {

                            const item = data.data

                            if (item.number == 0) {

                                searchFoodCart(item, {
                                    onSuccess: (data) => {
                                        const input = data?.data
                                        Delete(input, {
                                            onSuccess: (data) => {
                                                console.log('status', data.status)
                                            },
                                            onError: (error) => {
                                            }
                                        })
                                    },
                                    onError: () => {

                                    }
                                })

                            }
                        },
                        onError: (error) => {
                            console.log(error)
                        }
                    })
                }
            },
            onError: (error) => {
                console.log('login error')
            }

        })
    }

    return (
        <HStack h='200' w='420' direction='row-reverse' p='3' alignItems='center' justifyContent='space-between' borderTopWidth='0.5' borderTopColor={Colors.GARY_4}>
            <VStack space='2' pr='2'  >
                <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                <Text style={[styles.text, { height: 30 }]}>{item?.price} ريال</Text>
            </VStack>
            <VStack space='3' paddingLeft='2' >
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                <HStack width='100' justifyContent='space-between'>
                    <CustomButton title='-' onPress={() => handleFoodCart('minus')} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                    <Text style={styles.text}>{cart}</Text>
                    <CustomButton title='+' onPress={() => handleFoodCart('plus')} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                </HStack>
            </VStack>
        </HStack>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: Colors.GARY_1,
        fontFamily: fontFamily.number
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
});

