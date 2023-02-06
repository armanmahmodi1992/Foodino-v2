import { View, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { navigate, replace } from '~/navigation/Methods';
import { image } from '~/utils'
import { useTheme } from '@react-navigation/native';
import { CustomImage } from '~/component'

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
                <CustomImage imageSource={image.splash} style={styles.splash} resizeMode='cover' />
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