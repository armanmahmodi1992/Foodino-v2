import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { CustomLoading } from '~/component';
import { useTheme } from '@react-navigation/native';

export default function CustomContainer(props: {
    children: any;
    isLoading?: boolean;
    style?: ViewStyle;
    backgroundColor?: string;
}) {
    const { colors } = useTheme();
    const {
        style,
        children,
        isLoading = false,
        backgroundColor = colors.PRIMARY_LIGHT,
    } = props



    return (
        <View style={[styles.safeArea, style, { backgroundColor: backgroundColor }]}>
            {isLoading && <CustomLoading />}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
});