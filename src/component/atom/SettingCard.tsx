import { HStack } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from '~/navigation/Methods';
import { Style } from '~/utils';
import { useTheme } from '@react-navigation/native';
import { themeStore } from '~/store/ThemeStore';

export default function SettingCard({ item }: { item: any }) {

    const { colors } = useTheme();
    const { theme } = themeStore();

    const [isEnabled, setIsEnabled] = useState(theme);

    const onPressHandler = () => {
        if (item?.routeName) {
            navigate(item?.routeName)
        } else if (item?.switch == 'true') {
            item?.onValueChange?.()
            setIsEnabled(previousState => !previousState);
        } else {
            item?.onPress?.()
        }
    }


    return (

        item?.switch == 'true' ?
            <HStack w='100%' justifyContent='space-between' alignItems='center' >
                <HStack space='3' alignItems='center'>
                    <Icon name={item?.icon} size={30} color={colors.GARY_1} />
                    <Text style={[styles.text, { color: colors.GARY_1 }]}>{item?.name}</Text>
                </HStack>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onPressHandler}
                    value={isEnabled}
                />
            </HStack> :
            <TouchableOpacity onPress={onPressHandler} style={styles.container} >
                <HStack w='100%' justifyContent='space-between' alignItems='center' >
                    <HStack space='3' alignItems='center'>
                        <Icon name={item?.icon} size={30} color={colors.GARY_1} />
                        <Text style={[styles.text, { color: colors.GARY_1 }]}>{item?.name}</Text>
                    </HStack>
                    <Icon name='arrow-back-ios' size={30} color={colors.GARY_1} />
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
        fontWeight: Style.fontWeight.bold,
    }
})