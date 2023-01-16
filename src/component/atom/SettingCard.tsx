import { HStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '~/navigation/Methods';
import { Colors } from '~/style';
import { Style } from '~/utils';

export default function SettingCard({ item }: { item: any }) {

    const onPressHandler = () => {
        if (item?.routeName) {
            navigate(item?.routeName)
        } else {
            item?.onPress?.()
        }
    }

    return (

        <TouchableOpacity onPress={onPressHandler} style={styles.container} >
            <HStack w='100%' justifyContent='space-between' alignItems='center' >
                <Text style={styles.text}>{item?.name}</Text>
                <Icon name='chevron-left' size={20} color={Colors.SECONDARY} />
            </HStack>
        </TouchableOpacity >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: Style.fontWeight.bold
    }
})