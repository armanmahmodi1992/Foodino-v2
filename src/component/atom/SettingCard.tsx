import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack } from 'native-base'
import { Colors } from '~/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '~/navigation/Methods';
import { Style } from '~/utils';

export default function SettingCard({ item }: { item: any }) {
    return (

        <TouchableOpacity onPress={() => navigate(item?.navigate)} style={styles.container} >
            <HStack h='75' w='100%' borderWidth='1' justifyContent='space-between' bgColor={Colors.PRIMARY_LIGHT} borderColor={Colors.PRIMARY_LIGHT} alignItems='center' borderRadius='10' marginTop='2' p='3'>
                <Icon name='chevron-left' size={25} color={Colors.SECONDARY} />
                <Text style={styles.text}>{item?.name}</Text>
            </HStack>
        </TouchableOpacity >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 18,
        fontWeight: Style.fontWeight.bold
    }
})