import React, { useMemo, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CartCard, EmptyCart, SumCart, CustomLoading } from '~/component';
import { useUserCart } from '~/hooks';
import { authStore } from '~/store/AuthStore';

export default function CartScreen() {

    const { token } = authStore();
    const [{ id }] = token

    const { data } = useUserCart(id);
    const item = data?.data

    const renderItem = ({ item }: { item: any }) => {
        return (
            <CartCard item={item} />
        )
    }

    const cartCount = useMemo(() => {
        let count = 0
        data?.data?.map((element: any) => {
            count += element?.number
        })
        return count
    }, [data])

    const totalPrice = useMemo(() => {
        let price = 0

        data?.data?.map((element: any) => {
            price += element?.price * element?.number
        })
        return price
    }, [data])

    return (
        (item == '' ?
            <EmptyCart /> :
            <View style={styles.container} >
                <FlatList
                    data={item}
                    keyExtractor={(_, index) => `itm${index}`}
                    renderItem={renderItem}
                />
                <SumCart totalCount={cartCount} totalPrice={totalPrice} />
            </View>
        )
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 160,
        width: '100%'
    },
});