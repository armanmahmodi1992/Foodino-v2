import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '~/style'
import Icon from 'react-native-vector-icons/AntDesign'
import { HStack, VStack } from 'native-base';
import { authStore } from '~/store/AuthStore';
import { navigate } from '~/navigation/Methods';
import { QuestionModal } from '~/component';
import { image, Style } from '~/utils'

export default function UserScreen() {

    const { setIsLogin } = authStore(state => state);
    const { setToken } = authStore(state => state);
    const { token } = authStore();
    const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);

    let name, address, email

    if (token != '') {
        [{ name, address, email }] = token
    }

    const onLogOutPressHandler = () => {
        setLogoutModalVisible(true);
    };

    const onCloseLogoutModal = () => {
        setLogoutModalVisible(false);
    };

    const handleLogout = () => {
        setIsLogin(false);
        setToken('');
        navigate('LoginScreen')
    }

    return (
        <VStack flex={1} backgroundColor='white'>
            <Image source={{ uri: image.header }} style={styles.image} />
            <Image source={{ uri: image.splash }} style={styles.logo} />
            <HStack w='100%' position='absolute' mt='6px' justifyContent='space-between' px='2' alignItems='center'>
                <TouchableOpacity onPress={() => navigate('HomeScreen')}>
                    <Icon size={30} color={Colors.PRIMARY_LIGHT} name='right' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('SettingScreen')}>
                    <Icon size={30} color={Colors.PRIMARY_LIGHT} name='setting' />
                </TouchableOpacity>
            </HStack>
            <VStack px='4' space='4' >
                <Text style={styles.text}>  نام: {name} </Text>
                <Text style={styles.text}>  ایمیل: {email}</Text>
                <Text style={styles.text}>  آدرس: {address}  </Text>
            </VStack>
            <HStack mt='8' px='4' space='4' alignItems='center'>
                <TouchableOpacity onPress={() => onLogOutPressHandler()}>
                    <Icon size={25} color={Colors.SECONDARY_LIGHT} name='logout' />
                </TouchableOpacity>
                <Text style={styles.logoutText}>خروج از حساب کاربری</Text>
            </HStack>
            <QuestionModal
                option1="انصراف"
                option2="تایید"
                visible={logoutModalVisible}
                onClose={onCloseLogoutModal}
                option1OnPress={onCloseLogoutModal}
                option2OnPress={handleLogout}
                title="برای خروج از حساب کاربری دکمه تایید را بزنید."
            />
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
    text: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_LIGHT,
        borderRadius: 10,
        width: '100%',
        height: 30,
        fontSize: 19,
        fontWeight: Style.fontWeight.bold,
        justifyContent: 'center'
    },
    logoutText: {
        fontSize: 18,
        fontWeight: Style.fontWeight.bold,

    }
});