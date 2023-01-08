import { HStack } from 'native-base';
import React, { useEffect, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CartCard, CustomContainer, EmptyCart, SumCart } from '~/component';
import { useUserCart } from '~/hooks';
import { authStore } from '~/store/AuthStore';

export default function CartScreen() {

    const { token } = authStore();
    const id = token?.[0]?.id

    const { data, isLoading } = useUserCart(id);
    const items = data?.data

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

    const listFooterComponent = () => (
        <SumCart totalCount={cartCount} totalPrice={totalPrice} />
    )
    const itemSeparator = () => (
        <HStack h='1px' backgroundColor='gray.400' />
    )

    return (
        <CustomContainer isLoading={isLoading}>
            <View style={styles.container} >
                <FlatList
                    contentContainerStyle={styles.contentContainerStyle}
                    data={items}
                    keyExtractor={(_, index) => `itm${index}`}
                    renderItem={renderItem}
                    ListEmptyComponent={!isLoading ? EmptyCart : undefined}
                    ItemSeparatorComponent={itemSeparator}
                //ListFooterComponent={listFooterComponent}
                />
                {
                    items && (
                        <SumCart totalCount={cartCount} totalPrice={totalPrice} />
                    )
                }

            </View>
        </CustomContainer>
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
    contentContainerStyle: {
        flexGrow: 1
    }
});