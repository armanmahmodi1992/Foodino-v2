import React from 'react';
import { Colors } from '~/style';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { CustomLoading } from '~/component';

export default function CustomContainer({
    style,
    children,
    isLoading = false,
    backgroundColor = Colors.PRIMARY_LIGHT,
}: {
    children: any;
    isLoading?: boolean;
    style?: ViewStyle;
    backgroundColor?: string;
}) {
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