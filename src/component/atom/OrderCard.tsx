import { HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';

export const WIDTH = Dimensions.get('window').width / 4;

export default function OrderCard({ item }: { item: any }) {

    return (
        <View style={styles.content}>
            <HStack h='130' w='100%' direction='row-reverse' alignItems='center' >
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
                <VStack space='2' pr='1' flex={1} >
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

