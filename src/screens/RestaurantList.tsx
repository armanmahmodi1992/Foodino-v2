import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { RestaurantCard } from '~/component'

export default function RestaurantList({ route }: { route: any }) {

    const { restaurantList } = route.params
    const { food_list } = route.params
    console.log(restaurantList)
    const renderItem = ({ item }: { item: any }) => {

        return (
            <RestaurantCard item={item} food_list={food_list} />
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