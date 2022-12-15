import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { RestaurantCard } from '~/component'

export default function RestaurantList({ route }: { route: any }) {

    const { subset } = route?.params
    const { restaurantList } = route?.params

    const renderItem = ({ item }: { item: any }) => {

        return (
            <RestaurantCard item={item} />
        )
    }

    return (
        <View>
            <FlatList
                data={restaurantList}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
            />
        </View>
    )
}