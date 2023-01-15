import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Center, Text, HStack } from 'native-base';
import { ModalContainer, CustomButton } from '~/component';
import { scale, fontFamily, verticalScale } from '~/utils/Style';
import { Colors } from '~/style';

const QuestionModal = ({
    visible,
    onClose,
    option1 = '',
    option1OnPress,
    option2 = '',
    option2OnPress,
    title,
    loading,
    closeOnTouchOutSide = true,
}: {
    visible: boolean;
    onClose: any;
    option1?: string;
    option1OnPress?: any;
    option2?: string;
    option2OnPress?: any;
    title: string;
    loading?: boolean;
    closeOnTouchOutSide?: boolean;
}) => {
    const onCloseHandler = () => {
        onClose?.();
    };

    const option1Handler = () => {
        option1OnPress?.();
    };

    const option2Handler = () => {
        option2OnPress?.();
    };

    return (
        <ModalContainer
            isVisible={visible}
            onClose={onCloseHandler}
            style={styles.modal}
            loading={loading}
            closeOnTouchOutSide={closeOnTouchOutSide}>
            <VStack
                bg={Colors.PRIMARY_LIGHT}
                px="2"
                pt="8"
                pb="4"
                space="8"
                borderRadius="md">
                <Text
                    textAlign="center"
                    fontSize={scale(16)}
                    fontFamily={fontFamily.medium}
                    color={Colors.GARY_1}>
                    {title}
                </Text>
                <HStack space="2" h="35px">
                    <Center flex={1}>
                        <CustomButton
                            title={option2}
                            onPress={option2Handler}
                            buttonStyle={{ width: verticalScale(70), height: verticalScale(35), backgroundColor: Colors.PRIMARY_LIGHT }}
                            textStyle={{ fontSize: verticalScale(18), color: Colors.SECONDARY_LIGHT }}
                        />
                    </Center>
                    <Center flex={1}>
                        <CustomButton
                            title={option1}
                            onPress={option1Handler}
                            buttonStyle={{ width: verticalScale(70), height: verticalScale(35), backgroundColor: Colors.PRIMARY_LIGHT }}
                            textStyle={{ fontSize: verticalScale(18), color: Colors.SECONDARY_LIGHT }}
                        />
                    </Center>
                </HStack>
            </VStack>
        </ModalContainer>
    );
};

export default QuestionModal;

const styles = StyleSheet.create({
    modal: {
        borderRadius: 8,
        margin: scale(16),
        overflow: 'hidden',
    },
});
