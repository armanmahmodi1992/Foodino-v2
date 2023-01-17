import { HStack, VStack } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';
import { image, Style } from '~/utils';

export default function UserScreen() {

    const { token } = authStore();
    let name, address, email

    if (token != '') {
        [{ name, address, email }] = token
    }

    return (
        <VStack flex={1} backgroundColor='white' py='2'>
            <Image source={{ uri: image.header }} style={styles.image} />
            <Image source={{ uri: image.splash }} style={styles.logo} />
            <HStack w='100%' position='absolute' py='4' justifyContent='space-between' px='2' alignItems='center'>
                <TouchableOpacity onPress={() => navigate('HomeScreen')}>
                    <Icon size={30} color={Colors.PRIMARY_LIGHT} name='right' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('SettingScreen')}>
                    <Icon size={30} color={Colors.PRIMARY_LIGHT} name='setting' />
                </TouchableOpacity>
            </HStack>
            <HStack space='2'>
                <VStack pl='4' space='4' >
                    <Text style={styles.title}>نام</Text>
                    <Text style={styles.title}>ایمیل</Text>
                    <Text style={styles.title}>آدرس</Text>
                </VStack>
                <VStack flex={1} pl='2' space='4' >
                    <Text style={styles.info}>{name}</Text>
                    <Text style={styles.info}>{email}</Text>
                    <Text style={styles.info}>{address}</Text>
                </VStack>
            </HStack>
        </VStack >
    )
}
const styles = StyleSheet.create({

    imageContainer: {
        width: '100%',
        height: 250,
        backgroundColor: Colors.GARY_5
    },
    image: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: Colors.GARY_5,
        backgroundColor: Colors.GARY_4
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: -50,
        borderWidth: 1,
        borderColor: Colors.GARY_5,
        alignSelf: 'center',
        backgroundColor: Colors.PRIMARY_LIGHT,
    },
    title: {
        width: '100%',
        height: 35,
        fontSize: 20,
        fontWeight: Style.fontWeight.heavy,
        color: Colors.GARY_1,
        backgroundColor: Colors.WARNING,
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    info: {
        width: '100%',
        height: 35,
        fontSize: 20,
        fontFamily: Style.fontWeight.heavy,
        color: Colors.GARY_1,
        textAlign: 'left',
        textAlignVertical: 'center',
    },
});