import { Divider } from 'native-base';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CustomContainer, QuestionModal, SettingCard } from '~/component';
import { resetRoot } from '~/navigation/Methods';
import { item } from '~/services/SettingData';
import { authStore } from '~/store/AuthStore';

const renderItem = ({ item }: { item: any }) => {
    return (

        <SettingCard item={item} />
    )
}

const itemSeparator = () => (
    <Divider my='4' />
)

export default function SettingScreen() {

    const [logoutModalVisible, setLogoutModalVisible] = useState<boolean>(false);
    const { setIsLogin } = authStore(state => state);
    const { setToken } = authStore(state => state);

    const settingItems = [...item, { id: 5, name: ' خروج', onPress: () => onLogOutPressHandler() },];

    const onLogOutPressHandler = () => {
        setLogoutModalVisible(true);
    };

    const onCloseLogoutModal = () => {
        setLogoutModalVisible(false);
    };

    const handleLogout = () => {
        setIsLogin(false);
        setToken('');
        resetRoot('LoginScreen')
    }

    return (
        <CustomContainer>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                scrollEventThrottle={16}
                data={settingItems}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}

            />
            <QuestionModal
                option1="انصراف"
                option2="تایید"
                visible={logoutModalVisible}
                onClose={onCloseLogoutModal}
                option1OnPress={onCloseLogoutModal}
                option2OnPress={handleLogout}
                title="برای خروج از حساب کاربری دکمه تایید را بزنید."
            />
        </CustomContainer>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingVertical: 16,
        paddingHorizontal: 32,
    }
})