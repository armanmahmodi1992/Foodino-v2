import React from 'react';
import { fontFamily } from '~/utils/Style';
import { HStack, IconButton, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

const CustomHeader = ({
    back,
    route,
    options,
    navigation,
}: NativeStackHeaderProps) => {

    const { colors } = useTheme();
    return (
        <HStack alignItems="center"
            bgColor={colors.PRIMARY_LIGHT}
            h='50px' px='4'

        >
            {back && (
                <IconButton
                    onPress={() => navigation.goBack()}
                    icon={<Icon name="chevron-forward" color={colors.GARY_2} size={24} />}
                />
            )}
            <Text
                fontSize={19}
                color={colors.TEXT_ON_PRIMARY}
                textAlign='center'
                fontFamily={fontFamily.bold}>
                {options?.headerTitle}
            </Text>

            <IconButton disabled />
        </HStack>
    );
};

export default CustomHeader;