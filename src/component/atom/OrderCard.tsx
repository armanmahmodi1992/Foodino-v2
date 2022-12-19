import { HStack, Image, Text, View, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
import { useUpdateCartList } from '~/hooks';
export const WIDTH = Dimensions.get('window').width / 4;

export default function OrderCard({ item }: { item: any }) {

    return (
        <View style={styles.content}>
            <HStack h='160' w='95%' direction='row-reverse' borderWidth='1' bgColor={Colors.PRIMARY_LIGHT} borderColor={Colors.PRIMARY_LIGHT} alignItems='center' borderRadius='10' marginTop='2' p='3'>
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                <VStack space='2' pr='1' flex={1} m='1' >
                    <Text style={[styles.text, { height: 20 }]}>{item?.name}</Text>
                    <Text style={[styles.text, { height: 20 }]}>{item?.price} ريال</Text>
                    <Text style={[styles.text, { height: 20 }]}>{item?.number} پرس </Text>
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
        fontSize: 15,
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

