import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { fontFamily, fontWeight } from '~/utils/Style'

export default function CustomButton(props: { title: string, onPress: any, buttonStyle: any, textStyle: any }) {
    const { title, onPress, buttonStyle, textStyle } = props;

    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, { borderColor: colors.SECONDARY_LIGHT }]}
            onPress={onPress}
        >
            <Text style={[styles.textButton, textStyle, { color: colors.GARY_1 }]}>{title}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: fontWeight.heavy,
        fontFamily: fontFamily.regular,
    }
});

