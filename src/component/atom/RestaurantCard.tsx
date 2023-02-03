import { HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { navigate } from '~/navigation/Methods';
import { useTheme } from '@react-navigation/native';
import { fontFamily, fontWeight } from '~/utils/Style';
export const WIDTH = Dimensions.get('window').width / 4;

export default function RestaurantCard({ item, food_list }: { item: any; food_list: any }) {

    const { colors } = useTheme();
    return (
        <View style={styles.content}>
            <HStack h='160' w='100%' direction='row-reverse' borderWidth='1' bgColor={colors.PRIMARY_LIGHT} borderColor={colors.PRIMARY_LIGHT} alignItems='center' borderRadius='10' marginTop='2' p='3'>
                <VStack flex={1} mx='4' >
                    <Text style={[styles.text, { height: 25, color: colors.GARY_1, }]}>{item?.title}</Text>
                    <Text style={[styles.description, { color: colors.GARY_2 }]}>فودینو | سفارش انلاین غذا</Text>
                    <HStack mt='6' space='5'>
                        <Text style={[styles.description, { color: colors.GARY_2 }]}>5000 تومان</Text>
                        <Icon name='motorcycle' size={20} color={colors.GARY_2} />
                    </HStack>
                </VStack>
                <TouchableOpacity onPress={() => navigate('FoodMenuScreen', { food_list })}>
                    <Image source={{ uri: item?.logo }} style={[styles.image, { borderColor: colors.GARY_2 }]} alt='image' />
                </TouchableOpacity>
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
        fontFamily: fontFamily.number
    },
    description: {
        fontSize: 12,
        textAlignVertical: 'center',
        fontWeight: fontWeight.thin,
        fontFamily: fontFamily.number
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 1
    },
});

