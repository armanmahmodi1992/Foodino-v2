import { HStack, Image, Text, View, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomButton, CustomContainer, QuestionModal } from '~/component';
import { cartMinus, cartPlus } from '~/component/atom/CardCounter';
import { useUpdateFoodList, useDeleteCart } from '~/hooks';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function CartCard({ item }: { item: any }) {


    const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);
    const [cart, setCart] = useState(item?.number);

    const id = item?.id

    const { mutate: update, isLoading } = useUpdateFoodList()
    const { mutate: Delete } = useDeleteCart()

    const onLogOutPressHandler = () => {
        setLogoutModalVisible(true);
    };

    const onCloseLogoutModal = () => {
        setLogoutModalVisible(false);
    };

    useEffect(() => {
        item.number = cart
        update(item, {
            onSuccess: (data) => {
                const item = data.data
                if (item.number == 0) {
                    Delete(id, {
                        onSuccess: (data) => {
                            console.log('status', data.status)
                        },
                        onError: (error) => {
                        }
                    })
                }
            },
            onError: (error) => {
            }
        })
    }, [cart]);

    const deleteCart = () => {

        Delete(id, {
            onSuccess: (data) => {
                console.log('status', data.status)
            },
            onError: (error) => {
            }
        })

    };

    return (
        <CustomContainer isLoading={isLoading}>
            <View style={styles.content}>

                <HStack h='160' w='100%' alignItems='center' marginTop='2' px='4'>
                    <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                    <VStack space='2' flex={1} ml='2'>
                        <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                        <Text style={[styles.text, { height: 30 }]}>{item?.price} ريال</Text>
                    </VStack>
                    <VStack space='3' paddingLeft='2' >
                        <TouchableOpacity onPress={() => onLogOutPressHandler()}>
                            <Icon name='trash-o' size={30} color={Colors.ERROR} />
                        </TouchableOpacity>
                        <HStack width='100' justifyContent='space-between'>
                            <CustomButton title='+' onPress={() => setCart(cartPlus(cart))} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
                            <Text style={styles.text}>{cart}</Text>
                            <CustomButton title='-' onPress={() => setCart(cartMinus(cart))} buttonStyle={{ width: 29, height: 35, backgroundColor: Colors.PRIMARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.SECONDARY_LIGHT }} />
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
        </CustomContainer>
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

