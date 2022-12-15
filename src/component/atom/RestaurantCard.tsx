import { HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '~/style';
import { fontFamily, fontWeight } from '~/utils/Style';
import image from '~/assets/image'
import Icon from 'react-native-vector-icons/Fontisto'
import { navigate } from '~/navigation/Methods';
export const WIDTH = Dimensions.get('window').width / 4;

export default function RestaurantCard({ item }: { item: any }) {

    console.log('item in restaurant card', item)

    return (
        <View style={styles.content}>
            <HStack h='160' w='100%' direction='row-reverse' borderWidth='1' bgColor={Colors.PRIMARY_LIGHT} borderColor={Colors.PRIMARY_LIGHT} alignItems='center' borderRadius='10' marginTop='2' p='3'>

                <TouchableOpacity onPress={() => navigate('FoodMenuScreen')}>
                    <Image source={{ uri: item?.logo }} style={styles.image} alt='image' />
                </TouchableOpacity>

                <VStack flex={1} mx='4' >
                    <Text style={[styles.text, { height: 25 }]}>{item?.title}</Text>
                    <Text style={styles.description}>فودینو | سفارش انلاین غذا</Text>
                    <HStack direction='row-reverse' mt='6' space='5'>
                        <Icon name='motorcycle' size={20} color={Colors.GARY_4} />
                        <Text style={styles.description}>5000 تومان</Text>
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
        paddingHorizontal: 10

    },
    text: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: Colors.GARY_1,
        fontFamily: fontFamily.number
    },
    description: {
        fontSize: 12,
        textAlignVertical: 'center',
        color: Colors.GARY_4,
        fontWeight: fontWeight.thin,
        fontFamily: fontFamily.number
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.GARY_4,

    },
});

