import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';

const CustomLoading = ({ style = styles.loading }: { style?: ViewStyle }) => {

    const { colors } = useTheme();

    return (
        <View style={style}>
            <ActivityIndicator size={28} color={colors.SECONDARY_LIGHT} />
        </View>
    );
};

export default CustomLoading;

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    loading: {
        flex: 1,
        zIndex: 999,
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',

    },
});
