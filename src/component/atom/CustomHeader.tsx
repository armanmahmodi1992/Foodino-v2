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
        <HStack alignItems="center"
            bgColor={Colors.PRIMARY_LIGHT}
            h='50px' px='4'

        >
            {back && (
                <IconButton
                    onPress={() => navigation.goBack()}
                    icon={<Icon name="chevron-forward" color={Colors.GARY_3} size={24} />}
                />
            )}
            <Text
                fontSize={19}
                textAlign='center'
                fontFamily={fontFamily.bold}>
                {options?.headerTitle}
            </Text>

            <IconButton disabled />
        </HStack>
    );
};

export default CustomHeader;