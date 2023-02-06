import { Divider } from 'native-base';
import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CustomContainer, QuestionModal, SettingCard } from '~/component';
import { item } from '~/services/SettingData';
import { authStore } from '~/store/AuthStore';
import { themeStore } from '~/store/ThemeStore';


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
    const { setTheme, theme } = themeStore(state => state);

    const themHandler = () => {
        setTheme(!theme)
    }

    const settingItems = [
        { id: 5, name: ' زمینه تاریک', icon: 'brightness-6', onPress: () => themHandler(), switch: true },
        ...item,
        { id: 6, name: ' خروج', icon: 'logout', onPress: () => onLogOutPressHandler() },
    ];

    const onLogOutPressHandler = () => {
        setLogoutModalVisible(true);
    };

    const onCloseLogoutModal = () => {
        setLogoutModalVisible(false);
    };

    const handleLogout = () => {
        setIsLogin(false);
        setToken('');
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