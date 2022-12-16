import { HStack, Image, Text, View, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomButton, QuestionModal } from '~/component';
import { cartMinus, cartPlus } from '~/component/atom/CardCounter';
import { useUpdateFoodList } from '~/hooks';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function CartCard({ item }: { item: any }) {


    const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);

    const [cart, setCart] = useState(item?.number);

    const { mutate } = useUpdateFoodList()

    const onLogOutPressHandler = () => {
        setLogoutModalVisible(true);
    };

    const onCloseLogoutModal = () => {
        setLogoutModalVisible(false);
    };

    useEffect(() => {
        item.number = cart
        mutate(item, {
            onSuccess: (data) => {
            },
            onError: (error) => {
            }
        })
    }, [cart]);

    const deleteCart = () => {
        item.number = 0;
        console.log(mutate(item))
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
                    <TouchableOpacity onPress={() => onLogOutPressHandler()}>
                        <Icon name='trash-o' size={30} color={Colors.ERROR} />
                    </TouchableOpacity>
                    <HStack width='100' justifyContent='space-between'>
                        <CustomButton title='-' onPress={() => setCart(cartMinus(cart))} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                        <Text style={styles.text}>{cart}</Text>
                        <CustomButton title='+' onPress={() => setCart(cartPlus(cart))} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                    </HStack>
                </VStack>
                <QuestionModal
                    option1="انصراف"
                    option2="حذف"
                    visible={logoutModalVisible}
                    onClose={onCloseLogoutModal}
                    option1OnPress={onCloseLogoutModal}
                    option2OnPress={deleteCart}
                    title="آیا مطمئنید که میخواهید حذف کنید؟"
                />
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

