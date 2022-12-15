import React, { useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CartCard, EmptyCart, SumCart } from '~/component';
import { useCartList } from '~/hooks';

export default function CartScreen() {

    const { data } = useCartList();
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