import { Center, HStack, Image, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { CustomButton, Loading } from '~/component';
import { useUpdateFoodList } from '~/hooks';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const [cart, setCart] = useState(item?.number);
    const { mutate, isLoading } = useUpdateFoodList()

    if (isLoading) {
        return (
            <Center flex={1} >
                <Loading />
            </Center>
        )
    }

    const handleUpdateCart = (item: any) => {
        mutate(item, {
            onSuccess: (data) => {
                console.log('success data =>', data.status)
            },
            onError: (error) => {
                console.log('login error =>', error)
            }
        })
    }

    const cartPlus = () => {
        setCart(prevState => prevState + 1);
        item.number = cart + 1;
        handleUpdateCart(item);
    };

    const cartMinus = () => {
        if (cart > 0) {
            setCart(prevState => prevState - 1);
            item.number = cart - 1;
            handleUpdateCart(item);
        }
    }

    return (
        <HStack h='200' w='420' direction='row-reverse' alignItems='center' justifyContent='space-between' borderTopWidth='0.5' borderTopColor={Colors.GARY_4}>
            <VStack space='2' pr='2'  >
                <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                <Text style={[styles.text, { height: 30 }]}>{item?.price} ريال</Text>
            </VStack>
            <VStack space='3' paddingLeft='2' >
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                <HStack width='100' justifyContent='space-between'>
                    <CustomButton title='-' onPress={cartMinus} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                    <Text style={styles.text}>{cart}</Text>
                    <CustomButton title='+' onPress={cartPlus} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
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

