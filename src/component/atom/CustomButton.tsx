import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colors } from '~/style';
import { fontFamily, fontWeight } from '~/utils/Style'

export default function CustomButton(props: { title: string, onPress: any, buttonStyle: any, textStyle: any }) {
    const { title, onPress, buttonStyle, textStyle } = props;
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.textButton, textStyle]}>{title}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.SECONDARY_LIGHT,
    },
    textButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: fontWeight.heavy,
        fontFamily: fontFamily.regular,
    }
});

