import * as React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import image from '~/assets/image';
import { fontWeight, scale } from '~/utils/Style';

export const AppOfflineNotification: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image style={styles.image} source={image.noInternet} />
            <Text style={styles.text}>لطفا اتصال داده خود را بررسی کنید</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        marginTop: 20,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    text: {
        marginTop: 15,
        fontSize: scale(18),
        fontWeight: fontWeight.bold
    },
    image: {
        width: 200,
        height: 200
    }
});