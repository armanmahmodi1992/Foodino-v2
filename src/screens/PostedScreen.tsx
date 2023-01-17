import { Divider } from 'native-base';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CustomContainer, EmptyOrder, OrderCard } from '~/component';
import { useOrderList } from '~/hooks';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';

export default function PostedScreen({ route }: { route: any }) {

    const [myArray, setMyArray] = useState([])
    const { token } = authStore();
    const id = token?.[0]?.id

    const { data, isLoading } = useOrderList(id)

    const item = data?.data
    useMemo(() => {

        if (item && item?.length) {
            item?.filter((el: any) => {
                return el?.status == 'posted'
            })?.map((obj: any) => {
                setMyArray(prevState => [...prevState, obj])
            })
        }
    }, [item])

    const renderItem = ({ item }: { item: any }) => {
        return (

            <OrderCard item={item} />
        )
    }

    const itemSeparator = () => (
        <Divider my='4' />
    )

    return (
        <CustomContainer isLoading={isLoading} >
            <View style={styles.container} >
                <FlatList
                    data={myArray}
                    contentContainerStyle={styles.contentContainerStyle}
                    ListEmptyComponent={!isLoading ? EmptyOrder : undefined}
                    keyExtractor={(_, index) => `itm${index}`}
                    renderItem={renderItem}
                    ItemSeparatorComponent={itemSeparator}
                />

            </View>
        </CustomContainer>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    furtherInfo: {
        borderTopWidth: 1,
        borderTopColor: Colors.GARY_5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Colors.GARY_5
    },
    contentContainerStyle: {
        paddingVertical: 6,
        paddingHorizontal: 14,
        flexGrow: 1
    }

});