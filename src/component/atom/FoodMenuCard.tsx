import { HStack, Image, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { CustomButton } from '~/component';
import { UseUpdateFoodList } from '~/hooks';
import { badgeStore } from '~/store/BadgeStore';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const { setBadge } = badgeStore(state => state);
    const { badge } = badgeStore();
    const [cart, setCart] = useState(item?.number);
    const { mutate } = UseUpdateFoodList()

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
        setBadge(badge + 1);
    };

    const cartMinus = () => {
        if (cart > 0) {
            setCart(prevState => prevState - 1);
            item.number = cart - 1;
            handleUpdateCart(item);
            setBadge(badge - 1);
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
                    <CustomButton title='-' onPress={cartMinus} style={{ width: 27 }} />
                    <Text style={styles.text}>{cart}</Text>
                    <CustomButton title='+' onPress={cartPlus} style={{ width: 27 }} />
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
});

