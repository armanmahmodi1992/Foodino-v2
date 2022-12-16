import { HStack, Image, Text, VStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { CustomButton } from '~/component';
import { cartMinus, cartPlus } from '~/component/atom/CardCounter';
import { useUpdateFoodList } from '~/hooks';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const [cart, setCart] = useState(item?.number);
    const { mutate, isLoading } = useUpdateFoodList()

    useEffect(() => {
        item.number = cart
        mutate(item, {
            onSuccess: (data) => {
            },
            onError: (error) => {
            }
        })
    }, [cart]);


    return (
        <HStack h='200' w='420' direction='row-reverse' p='3' alignItems='center' justifyContent='space-between' borderTopWidth='0.5' borderTopColor={Colors.GARY_4}>
            <VStack space='2' pr='2'  >
                <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                <Text style={[styles.text, { height: 30 }]}>{item?.price} ريال</Text>
            </VStack>
            <VStack space='3' paddingLeft='2' >
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                <HStack width='100' justifyContent='space-between'>
                    <CustomButton title='-' onPress={() => setCart(cartMinus(cart))} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                    <Text style={styles.text}>{cart}</Text>
                    <CustomButton title='+' onPress={() => setCart(cartPlus(cart))} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
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

