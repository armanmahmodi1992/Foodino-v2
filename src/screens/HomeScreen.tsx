import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CustomContainer, HomeCard } from '~/component';
import { useFoodCategory } from '~/hooks';

export default function Home() {

    const { data, isLoading } = useFoodCategory();
    const item = data?.data

    const renderItem = ({ item }: { item: any }) => {
        return (
            <HomeCard item={item} />
        )
    }

    return (
        <CustomContainer isLoading={isLoading}>

            <View style={styles.container} >
                <View style={styles.flatList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            alignSelf: 'center',
                        }}
                        data={item}
                        columnWrapperStyle={{ flexDirection: 'row' }}
                        numColumns={2}
                        keyExtractor={(_, index) => `itm${index}`}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </CustomContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    flatList: {
        paddingBottom: 30,
    }
});