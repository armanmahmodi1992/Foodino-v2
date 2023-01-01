import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { OrderCard, EmptyOrder } from '~/component';
import { useOrderList } from '~/hooks';
import { Colors } from '~/style';
import { authStore } from '~/store/AuthStore';

export default function OrdersScreen({ route }: { route: any }) {

    let id
    const { token } = authStore();
    if (token != '') {
        [{ id }] = token
    }

    const { data } = useOrderList(id)

    const item = data?.data
    console.log(item)
    const renderItem = ({ item }: { item: any }) => {
        return (

            <OrderCard item={item} />
        )
    }

    return (

        (item == '' ?
            <EmptyOrder /> :

            <View style={styles.container} >
                <FlatList
                    data={item}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={(_, index) => `itm${index}`}
                    renderItem={renderItem}
                />

            </View>
        )
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    furtherInfo: {
        borderTopWidth: 1,
        borderTopColor: Colors.GARY_5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Colors.GARY_5
    },
    flatList: {
        paddingBottom: 10
    }

});