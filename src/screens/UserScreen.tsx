import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Colors } from '~/style'
import image from '~/assets/image'
import Icon from 'react-native-vector-icons/AntDesign'
import { HStack, VStack } from 'native-base';
import { authStore } from '~/store/AuthStore';
import { fontWeight } from '~/utils/Style'
import { navigate } from '~/navigation/Methods';

export default function UserScreen() {

    const { token, reset } = authStore();

    const [{ email, name, address }] = token;

    const handleLogout = () => {
        reset();
        navigate('LoginScreen')
    }
    return (
        <VStack flex={1}>
            <Image source={image?.headerFood} style={styles.image} />
            <Image source={image.splash} style={styles.logo} />
            <TouchableOpacity style={styles.setting} onPress={() => navigate('SettingScreen')}>
                <Icon size={35} color={Colors.SECONDARY} name='setting' />
            </TouchableOpacity>
            <VStack mt='3' mr='2' space='4' alignItems='flex-end' borderBottomWidth='4' borderBottomColor={Colors.GARY_5} pb='5'>
                <Text style={styles.text}>  نام : {name} </Text>
                <Text style={styles.text}>   ایمیل : {email}</Text>
                <Text style={styles.text}>  آدرس : {address}  </Text>
            </VStack>
            <HStack flexDirection='row-reverse' mt='8' p='4' space='4' alignItems='center'>
                <TouchableOpacity onPress={handleLogout}>
                    <Icon size={40} color={Colors.SECONDARY_LIGHT} name='logout' />
                </TouchableOpacity>
                <Text style={styles.logoutText}>خروج از حساب کاربری</Text>
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
        borderWidth: 1,
        borderRadius: 10,
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
    setting: {
        position: 'absolute',
        margin: 4,
        marginLeft: 7,
        width: 33,
        height: 33,
        borderRadius: 16
    },
    text: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_LIGHT,
        borderRadius: 10,
        width: '97%',
        height: 35,
        textAlign: 'right',
        fontSize: 19,
        fontWeight: fontWeight.bold,
        justifyContent: 'center'
    },
    logoutText: {
        fontSize: 18,
        fontWeight: fontWeight.bold,

    }
});