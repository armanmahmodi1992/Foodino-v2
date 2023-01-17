import { HStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
                <HStack space='3' alignItems='center'>
                    <Icon name={item?.icon} size={30} />
                    <Text style={styles.text}>{item?.name}</Text>
                </HStack>
                <Icon name='arrow-back-ios' size={20} />
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