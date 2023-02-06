import { useTheme } from '@react-navigation/native';
import { HStack, Text, VStack } from 'native-base';
import React, { useMemo, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { CustomButton, CustomContainer, CustomImage } from '~/component';
import { useDeleteCart, usePostCart, useUpdateFoodList, useUserCart } from '~/hooks';
import { authStore } from '~/store/AuthStore';
import { fontFamily } from '~/utils/Style';

export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const { colors } = useTheme();
    const { data: getUSerCart, isLoading } = useUserCart();
    const { mutate: postCart } = usePostCart()
    const { mutate: mutateUpdateCart, isLoading: isLoadingUpdateCart } = useUpdateFoodList()
    const { mutate: Delete } = useDeleteCart()
    const { token } = authStore();
    const id = token?.[0]?.id

    const foodItem = useMemo(() => {

        let itemId = null;
        let countNumber = 0;
        if (item && getUSerCart?.data?.length) {
            getUSerCart?.data?.filter((el: any) => {
                if (el?.food_id == item?.id) {
                    itemId = el?.id;
                    return el
                }
            })?.map((obj: any) => {
                countNumber += obj?.number

            })
        }
        return { count: countNumber, itemId }
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
                const input = {
                    ...item,
                    id: foodItem.itemId,
                    user_id: id,
                    number: inputValue
                }
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
            if (inputValue == 0) {
                Delete(foodItem.itemId, {
                    onSuccess: (data) => {
                        console.log('status', data?.status)
                    },
                    onError: (error) => {
                    }
                })
            } else {
                const input = {
                    ...item,
                    id: foodItem.itemId,
                    user_id: id,
                    number: inputValue
                }

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
                    <Text style={[styles.text, { height: 30, color: colors.GARY_1 }]}>{item?.name}</Text>
                    <Text style={[styles.text, { height: 30, color: colors.GARY_1 }]}>{item?.price} ريال</Text>
                </VStack>
                <VStack space='3' paddingLeft='2' >
                    <CustomImage imageSource={item?.pic} style={styles.image} resizeMode='cover' />
                    <NumericUpDown value={Number(foodItem?.count)} onChange={handleFoodCart} />
                </VStack>
            </HStack>
        </CustomContainer>
    )
}

const NumericUpDown = ({ value, onChange }: { value: number; onChange: (val: number, type: 'inc' | 'dec') => void }) => {

    const { colors } = useTheme();
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
            <CustomButton title='+' onPress={() => increment(count)} buttonStyle={{ width: 29, height: 35, backgroundColor: colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: colors.SECONDARY_LIGHT }} />
            <Text style={[styles.text, { color: colors.GARY_1 }]}>{count}</Text>
            <CustomButton title='-' onPress={() => decrement(count)} buttonStyle={{ width: 29, height: 35, backgroundColor: colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: colors.SECONDARY_LIGHT }} />
        </HStack>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlignVertical: 'center',
        fontFamily: fontFamily.number
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden'
    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
});
