import { VStack } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { SettingCard } from '~/component';
import { item } from '~/services/Data';

const renderItem = ({ item }: { item: any }) => {
    return (

        <SettingCard item={item} />
    )
}

export default function SettingScreen() {

    return (
        <VStack flex={1}>
            <FlatList
                scrollEventThrottle={16}
                data={item}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
            />
        </VStack>
    )
}