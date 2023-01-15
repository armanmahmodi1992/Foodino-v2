import { HStack, Image, Text, VStack } from 'native-base';
import React, { useMemo, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { CustomButton, CustomContainer } from '~/component';
import { useDeleteCart, usePostCart, useUpdateFoodList, useUserCart, useUserCartByFoodId } from '~/hooks';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';

export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const { data: getUSerCart, isLoading } = useUserCart();
    const { mutate: userCartByFoodId } = useUserCartByFoodId()
    const { mutate: postCart } = usePostCart()
    const { mutate: mutateUpdateCart, isLoading: isLoadingUpdateCart } = useUpdateFoodList()
    const { mutate: Delete } = useDeleteCart()
    const { token } = authStore();
    const id = token?.[0]?.id

    const count = useMemo(() => {
        let countNumber = 0;
        if (item && getUSerCart?.data?.length) {
            getUSerCart?.data?.filter((el: any) => {
                return el?.food_id == item?.id
            })?.map((obj: any) => {
                countNumber += obj?.number
            })
        }
        return countNumber
    }, [item, getUSerCart])

    const handleFoodCart = (inputValue: number, type: 'inc' | 'dec') => {

        if (type === 'inc') {
            const input = {
                ...item,
                user_id: id,
                number: inputValue
            }
            if (inputValue === 1) {

                postCart(input, {
                    onSuccess: (data) => {
                        console.log('success', data.status)
                    },
                    onError: (error) => {
                        console.log(error)
                    }
                })
            } else {
                mutateUpdateCart(input, {
                    onSuccess: (data) => {
                        const item = data?.data
                    },
                    onError: (error) => {
                        console.log(error)
                    }
                })
            }
        } else {
            const input = {
                ...item,
                user_id: id,
                number: inputValue
            }
            if (inputValue == 0) {
                const food_id = item?.id
                userCartByFoodId(food_id, {
                    onSuccess: (data) => {
                        const deleteInput = data?.data?.[0]?.id
                        Delete(deleteInput, {
                            onSuccess: (data) => {
                                console.log('status', data?.status)
                            },
                            onError: (error) => {
                            }
                        })

                    },
                    onError: (error) => {

                    }
                }

                )
            } else {
                mutateUpdateCart(input, {
                    onSuccess: (data) => {
                        const item = data?.data
                    },
                    onError: (error) => {
                        console.log(error)
                    }
                })
            }
        }

    }
    return (
        <CustomContainer isLoading={isLoading}>
            <HStack h='200' w='100%' px='4' py='4' justifyContent='space-between' >
                <VStack space='2' pr='2' pt='4px' >
                    <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                    <Text style={[styles.text, { height: 30 }]}>{item?.price} ريال</Text>
                </VStack>
                <VStack space='3' paddingLeft='2' >
                    <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                    <NumericUpDown value={Number(count)} onChange={handleFoodCart} />
                </VStack>
            </HStack>
        </CustomContainer>
    )
}

const NumericUpDown = ({ value, onChange }: { value: number; onChange: (val: number, type: 'inc' | 'dec') => void }) => {
    const [count, setCount] = useState(value);

    const increment = (val: number) => {
        onChange?.(val + 1, 'inc')
        setCount(val + 1)
    }

    const decrement = (val: number) => {
        if (count > 0) {
            onChange?.(val - 1, 'dec')
            setCount(val - 1)
        }
    }

    return (
        <HStack width='100' justifyContent='space-between'>
            <CustomButton title='+' onPress={() => increment(count)} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
            <Text style={styles.text}>{count}</Text>
            <CustomButton title='-' onPress={() => decrement(count)} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
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
