import { VStack, HStack } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { SettingCard } from '~/component';
import { item } from '~/services/SettingData';

const renderItem = ({ item }: { item: any }) => {
    return (

        <SettingCard item={item} />
    )
}

const itemSeparator = () => (
    <HStack h='2px' backgroundColor='gray.400' />
)


export default function SettingScreen() {

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