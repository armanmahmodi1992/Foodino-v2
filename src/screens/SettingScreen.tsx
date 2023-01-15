import { VStack, HStack, Text, IconButton } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { SettingCard } from '~/component';
import { item } from '~/services/SettingData';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '~/style';
import { Style } from '~/utils'


const renderItem = ({ item }: { item: any }) => {
    return (

        <SettingCard item={item} />
    )
}

const itemSeparator = () => (
    <HStack h='2px' backgroundColor='gray.400' mx='4' />
)

export default function SettingScreen() {

    const { setIsLogin } = authStore(state => state);
    const { setToken } = authStore(state => state);

    const handleLogout = () => {
        setIsLogin(false);
        setToken('');
        navigate('LoginScreen')
    }

    return (
        <VStack flex={1} backgroundColor='white'>
            <FlatList
                scrollEventThrottle={16}
                data={item}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}

            />
        </VStack>
    )
}