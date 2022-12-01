import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AppBar, HomeCard } from '~/component';
import { useFoodCategory } from '~/hooks';


export default function Home() {

    const { data } = useFoodCategory();
    const item = data?.data


    const renderItem = ({ item }: { item: any }) => {
        return (
            <HomeCard item={item} />
        )
    }

    return (
        <View style={styles.container} >
            <AppBar title='صفحه اصلی' icon='home' />
            <View style={styles.flatList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignSelf: 'center',
                    }}
                    data={item}
                    keyExtractor={(_, index) => `itm${index}`}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    flatList: {
        paddingBottom: 90,
        paddingTop: 15
    }
});