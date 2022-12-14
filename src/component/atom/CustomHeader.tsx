import React from 'react';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
import { HStack, IconButton, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const CustomHeader = ({
    back,
    route,
    options,
    navigation,
}: NativeStackHeaderProps) => {
    return (
        <HStack px={4} alignItems="center" bgColor={Colors.PRIMARY_LIGHT}>
            {back && (
                <IconButton
                    onPress={() => navigation.goBack()}
                    icon={<Icon name="chevron-back" color={Colors.GARY_3} size={24} />}
                />
            )}
            <Text
                flex={1}
                fontSize={19}
                textAlign='center'
                fontFamily={fontFamily.medium}>
                {options?.headerTitle}
            </Text>
            <IconButton disabled />
        </HStack>
    );
};

export default CustomHeader;