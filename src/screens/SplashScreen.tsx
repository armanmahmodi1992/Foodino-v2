import { View, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import image from '~/assets/image';
import { Colors } from '~/style';
import { navigate } from '~/navigation/Methods';

export default function SplashScreen() {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('TabNavigator')
        }, 2000);
    }, []);

    return (
        <>
            <StatusBar backgroundColor={Colors.GARY_2} />

            <View style={styles.container}>
                <Image source={image.splash} style={styles.splash} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    statusBar: {

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.GARY_2
    },
    splash: {
        width: 250,
        height: 250
    }
})