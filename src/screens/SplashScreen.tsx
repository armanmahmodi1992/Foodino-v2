import { View, Image, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { navigate, replace } from '~/navigation/Methods';
import { image } from '~/utils'
import { useTheme } from '@react-navigation/native';

export default function SplashScreen() {
    const { colors } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            replace('TabNavigator')
        }, 1000);
    }, []);

    return (
        <>
            <StatusBar backgroundColor={colors.GARY_5} />

            <View style={[styles.container, { backgroundColor: colors.GARY_5 }]}>
                <Image source={{ uri: image.splash }} style={styles.splash} />
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
    },
    splash: {
        width: 250,
        height: 250
    }
})