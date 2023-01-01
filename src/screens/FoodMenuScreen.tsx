import React from 'react';
import { Animated, Dimensions, FlatList, StyleSheet } from 'react-native';
import { FoodMenuCard } from '~/component';
import { Colors } from '~/style';
import { image, Style } from '~/utils'

const renderItem = ({ item }: { item: any }) => {

    return (

        <FoodMenuCard item={item} />
    )
}

const HEADER_EXPANDED_HEIGHT = 160
const HEADER_COLLAPSED_HEIGHT = 50
const { width: SCREEN_WIDTH } = Dimensions.get("screen")

export default function FoodMenu({ route }: { route: any }) {

    const item = route?.params.food_list

    const scrollY = new Animated.Value(0)
    const headerY = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    })
    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const heroTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    return (

        <Animated.View style={styles.container} >
            <Animated.View style={[styles.header, { height: headerY }]}>
                <Animated.Image source={{ uri: image.header }} style={{ position: 'absolute', opacity: heroTitleOpacity, height: 170, width: '100%', bottom: 0, left: 0 }} />
                <Animated.Text style={[styles.text, { opacity: headerTitleOpacity }]}>فودینو</Animated.Text>
            </Animated.View>
            <FlatList
                contentContainerStyle={styles.scrollContainer}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY
                            }
                        }
                    }],
                    { useNativeDriver: false })
                }
                scrollEventThrottle={16}
                data={item}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
            />
        </Animated.View>
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

    text: {

        fontFamily: Style.fontFamily.bold,
        fontSize: 25,
        paddingRight: 15,
        paddingTop: 4,
        textAlignVertical: 'center',
        alignSelf: 'flex-end',
        marginTop: 3,
        color: Colors.GARY_1
    },
    scrollContainer: {
        paddingTop: HEADER_EXPANDED_HEIGHT
    },
    header: {
        backgroundColor: '#fff',
        position: 'absolute',
        width: SCREEN_WIDTH,
        top: 0,
        left: 0,
        zIndex: 9999
    },
});