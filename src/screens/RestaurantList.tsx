import { HStack, VStack } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantCard } from '~/component';

const itemSeparator = () => (
    <HStack h='2px' backgroundColor='gray.400' />
)

export default function RestaurantList({ route }: { route: any }) {

    const { restaurantList } = route.params
    const { food_list } = route.params

    const renderItem = ({ item }: { item: any }) => {
        return (
            <RestaurantCard item={item} food_list={food_list} />
        )
    }

    return (
        <VStack flex={1} backgroundColor='white'>
            <FlatList
                data={restaurantList}
                keyExtractor={(_, index) => `itm${index}`}
                ItemSeparatorComponent={itemSeparator}
                renderItem={renderItem}
            />
        </VStack>
    )
}