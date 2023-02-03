import { FormControl, HStack, Text } from 'native-base';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
// const { colors } = useTheme();
export default React.forwardRef(
    (
        {
            name,
            placeholder,
            defaultValue,
            type,
            keyboardType,
            backgroundColor = useTheme().colors.GARY_5,
            label,
            required = false,
            color = useTheme().colors.GARY_1,
            textArea = false,
            disabled,
            mode = 'input',
            textAlign,
        }: {
            name: any;
            placeholder?: string;
            defaultValue?: any;
            type?: string;
            keyboardType?:
            | 'default'
            | 'email-address'
            | 'numeric'
            | 'phone-pad'
            | 'number-pad'
            | 'decimal-pad'
            | 'visible-password'
            | 'ascii-capable'
            | 'numbers-and-punctuation'
            | 'url'
            | 'name-phone-pad'
            | 'twitter'
            | 'web-search'
            | undefined;
            backgroundColor?: string;
            label?: string;
            required?: boolean;
            color?: string;
            textArea?: boolean;
            disabled?: boolean;
            mode?: 'input' | 'text';
            textAlign?: any
        },
        ref: any,
    ) => {
        const { field, fieldState } = useController({ name });
        const [secureText, setSecureText] = useState(false);

        const handleSecurePassword = () => {
            setSecureText(prevState => !prevState);
        };



        return (
            <FormControl isInvalid={fieldState.error} w={{ base: '100%' }} >
                {label && (
                    <Text
                        mb="3"
                        color={useTheme().colors.GARY_1}
                        fontSize='14'
                    >
                        {label}
                        {required && mode === 'input' && (
                            <Text color='red.400'>{' *'}</Text>
                        )}
                    </Text>
                )}
                {mode === 'input' ? (
                    <HStack
                        bg={backgroundColor}
                        borderRadius="md"
                        alignItems="center"
                        justifyContent="center"
                        px="2"
                        h={textArea ? '96px' : '48px'}>
                        <TextInput

                            editable={!disabled}
                            ref={ref}
                            defaultValue={defaultValue}
                            numberOfLines={textArea ? 4 : 1}
                            textAlignVertical={textArea ? 'top' : 'center'}
                            placeholder={placeholder}
                            secureTextEntry={type === 'password' ? !secureText : false}
                            placeholderTextColor='gray'
                            autoCapitalize="none"
                            textAlign='right'
                            keyboardType={keyboardType}
                            multiline={textArea ? true : false}
                            value={field.value}
                            onChangeText={field.onChange}
                            onBlur={field.onBlur}
                            style={[
                                {
                                    textAlignVertical: textArea ? 'top' : 'center',
                                    color: color,
                                },
                                styles.inputStyle,
                            ]}
                        />
                        {type === 'password' && (
                            <TouchableOpacity
                                onPress={handleSecurePassword}
                                activeOpacity={0.7}
                            >

                                <Icon name={secureText ? 'eye' : 'eye-slash'} size={24} color={useTheme().colors.GARY_1} />

                            </TouchableOpacity>
                        )}
                    </HStack>
                ) : (
                    <Text flex={1} fontSize='14' >
                        {field?.value ?? '-'}
                    </Text>
                )}
                <FormControl.ErrorMessage >
                    {fieldState.error?.message}
                </FormControl.ErrorMessage>
            </FormControl>
        );
    },
);

const styles = StyleSheet.create({
    inputStyle: {
        flex: 2,
        fontSize: 14,
        height: '100%',
    },
});
