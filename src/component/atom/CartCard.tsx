import { HStack, Image, Text, View, VStack, Center } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomButton, Loading } from '~/component';
import { useUpdateFoodList } from '~/hooks';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function CartCard({ item }: { item: any }) {

    const [cart, setCart] = useState(item?.number);
    const { mutate, isLoading } = useUpdateFoodList()
    if (isLoading && cart > 0) {
        return (
            <Center flex={1} >
                <Loading />
            </Center>
        )
    }
    const handleUpdateCart = (item: any) => {
        mutate(item, {
            onSuccess: (data) => {
            },
            onError: (error) => {
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

    const deleteCart = () => {
        item.number = 0;
        console.log(handleUpdateCart(item))

    };

    return (
        <View style={styles.content}>
            <HStack h='160' w='95%' direction='row-reverse' borderWidth='1' bgColor={Colors.PRIMARY_LIGHT} borderColor={Colors.PRIMARY_LIGHT} alignItems='center' borderRadius='10' marginTop='2' p='3'>
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                <VStack space='2' pr='1' flex={1} m='1' >
                    <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                    <Text style={[styles.text, { height: 30 }]}>{item?.price} ريال</Text>
                </VStack>
                <VStack space='3' paddingLeft='2'  >
                    <TouchableOpacity onPress={() => deleteCart()}>
                        <Icon name='trash-o' size={30} color={Colors.SECONDARY_LIGHT} />
                    </TouchableOpacity>
                    <HStack width='100' justifyContent='space-between'>
                        <CustomButton title='-' onPress={cartMinus} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                        <Text style={styles.text}>{cart}</Text>
                        <CustomButton title='+' onPress={cartPlus} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                    </HStack>
                </VStack>
            </HStack>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        paddingHorizontal: 5

    },
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

