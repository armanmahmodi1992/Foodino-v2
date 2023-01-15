import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { OrderCard, EmptyOrder, CustomContainer } from '~/component';
import { useOrderList } from '~/hooks';
import { Colors } from '~/style';
import { authStore } from '~/store/AuthStore';
import { HStack } from 'native-base';

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
        <HStack h='2px' mx='4' backgroundColor='gray.400' />
    )

    return (
        <CustomContainer isLoading={isLoading} >
            <View style={styles.container} >
                <FlatList
                    data={myArray}
                    contentContainerStyle={styles.flatList}
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
    flatList: {
        paddingBottom: 10
    }

});