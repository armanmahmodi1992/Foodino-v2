import { useTheme } from '@react-navigation/native';
import { HStack, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CustomImage } from '~/component'
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { image, Style } from '~/utils';

export default function UserScreen() {

    const { colors } = useTheme();
    const { token } = authStore();
    let name, address, email

    if (token != '') {
        [{ name, address, email }] = token
    }

    return (
        <VStack flex={1} backgroundColor={colors.PRIMARY_LIGHT} >
            <CustomImage imageSource={image.header} resizeMode='stretch' style={[styles.image, { borderColor: colors.GARY_4, backgroundColor: colors.GARY_4 }]} resizeMode='cover' />
            <CustomImage imageSource={image.splash} style={[styles.logo, { borderColor: colors.GARY_4, backgroundColor: colors.GARY_1 }]} resizeMode='cover' />
            <HStack w='100%' position='absolute' py='4' justifyContent='space-between' px='2' alignItems='center'>
                <TouchableOpacity onPress={() => navigate('HomeScreen')}>
                    <Icon size={33} color={colors.WHITE} name='right' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('SettingScreen')}>
                    <Icon size={33} color={colors.WHITE} name='setting' />
                </TouchableOpacity>
            </HStack>
            <HStack space='2'>
                <VStack pl='4' space='4' >
                    <Text style={[styles.title, { color: colors.GARY_1, backgroundColor: colors.WARNING }]}>نام</Text>
                    <Text style={[styles.title, { color: colors.GARY_1, backgroundColor: colors.WARNING }]}>ایمیل</Text>
                    <Text style={[styles.title, { color: colors.GARY_1, backgroundColor: colors.WARNING }]}>آدرس</Text>
                </VStack>
                <VStack flex={1} pl='2' space='4' >
                    <Text style={[styles.info, { color: colors.GARY_1 }]}>{name}</Text>
                    <Text style={[styles.info, { color: colors.GARY_1 }]}>{email}</Text>
                    <Text style={[styles.info, { color: colors.GARY_1 }]}>{address}</Text>
                </VStack>
            </HStack>
        </VStack >
    )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: -50,
        borderWidth: 1,
        alignSelf: 'center',
    },
    title: {
        width: '100%',
        height: 35,
        fontSize: 20,
        fontWeight: Style.fontWeight.heavy,
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    info: {
        width: '100%',
        height: 35,
        fontSize: 20,
        fontFamily: Style.fontWeight.heavy,
        textAlign: 'left',
        textAlignVertical: 'center',
    },
});