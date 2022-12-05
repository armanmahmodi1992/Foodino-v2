import { View, StyleSheet } from 'react-native'
import { DotIndicator } from 'react-native-indicators';
import React from 'react'
export default function Loading() {
    return (
        <View style={styles.container}>
            <DotIndicator color='dodgerblue' size={10} count={3} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        opacity: 0.5,
    }
})