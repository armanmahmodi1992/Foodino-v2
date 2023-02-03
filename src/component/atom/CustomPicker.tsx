import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    VStack,
    Text,
    Box,
    HStack,
    Divider,
    Icon,
    FormControl,
} from 'native-base';
import { useTheme } from '@react-navigation/native';
import { fontFamily, scale } from '~/utils/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useController } from 'react-hook-form';

export default React.forwardRef(
    (
        {
            name,
            data,
            label,
            required,
            placeholder,
        }: {
            name: any;
            data: any;
            label?: string;
            required?: boolean;
            placeholder?: string;
        },
        ref: any,
    ) => {
        const { field, fieldState } = useController({ name });
        const [visible, setVisible] = useState(false);

        const onPressHandler = () => {
            setVisible(prevState => !prevState);
        };

        const getName = (value: string) => {
            const item = data.find((element: any) => element.value === value);
            return item?.title;
        };

        const itemOnPress = (item: any) => {
            setVisible(false);
            field.onChange?.(item?.value);
        };

        const { colors } = useTheme();

        return (
            <FormControl isInvalid={fieldState.error} w={{ base: '100%' }}>
                {label && (
                    <Text
                        mb="3"
                        ref={ref}
                        color={colors.HEADER_TITLE}
                        fontSize={scale(14)}
                        fontFamily={fontFamily.medium}>
                        {label}
                        {required && <Text color={colors.PRIMARY}>{'   *'}</Text>}
                    </Text>
                )}
                <TouchableOpacity activeOpacity={0.7} onPress={onPressHandler}>
                    <HStack
                        borderRadius="md"
                        borderWidth="0.5"
                        h={scale(48)}
                        px="2"
                        bg={colors.WHITE}
                        alignItems="center"
                        borderColor={colors.BORDER_COLOR}>
                        <Text
                            flex={1}
                            numberOfLines={1}
                            fontSize={scale(12)}
                            fontFamily={fontFamily.medium}
                            color={field.value ? colors.RIVER_BED : colors.BORDER_COLOR}>
                            {field.value ? getName(field.value) : placeholder}
                        </Text>
                        <Icon
                            as={<Ionicons name="chevron-down" />}
                            size={scale(22)}
                            color={colors.BORDER_COLOR}
                            mr="2"
                        />
                    </HStack>
                </TouchableOpacity>
                {visible && (
                    <VStack
                        mt="1"
                        borderRadius="md"
                        borderColor={colors.BORDER_COLOR}
                        borderWidth="0.5">
                        {data.map((item, index: number) => {
                            return (
                                <Box key={index + 1}>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={() => itemOnPress(item)}>
                                        <VStack p="2">
                                            {item?.title && (
                                                <Text
                                                    numberOfLines={1}
                                                    fontSize={scale(12)}
                                                    fontFamily={fontFamily.medium}
                                                    color={colors.HEADER_TITLE}>
                                                    {item?.title}
                                                </Text>
                                            )}
                                            {item?.subtitle && (
                                                <Text
                                                    numberOfLines={1}
                                                    fontSize={scale(10)}
                                                    fontFamily={fontFamily.medium}
                                                    color={colors.BORDER_COLOR}>
                                                    {item?.subtitle}
                                                </Text>
                                            )}
                                        </VStack>
                                    </TouchableOpacity>
                                    {index + 1 < data?.length && (
                                        <Divider color={colors.BORDER_COLOR} />
                                    )}
                                </Box>
                            );
                        })}
                    </VStack>
                )}
                <FormControl.ErrorMessage>
                    {fieldState.error?.message}
                </FormControl.ErrorMessage>
            </FormControl>
        );
    },
);
