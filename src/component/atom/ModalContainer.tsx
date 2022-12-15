import React from 'react';
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { scale } from '~/utils/Style';
import { CustomLoading } from '~/component';

function ModalContainer({
    isVisible,
    onClose,
    children,
    backdropColor,
    backgroundColor,
    justify = 'center',
    style = styles.modalInnerContainer,
    loading,
    closeOnTouchOutSide = true,
}: {
    isVisible: boolean;
    onClose: any;
    children: any;
    onModalHide?: any;
    backdropColor?: string;
    backgroundColor?: string;
    justify?: any;
    style?: any;
    loading?: boolean;
    closeOnTouchOutSide?: boolean;
}) {
    return (
        <Modal
            animationType="fade"
            transparent
            visible={isVisible}
            onRequestClose={onClose}>
            <TouchableWithoutFeedback
                onPress={closeOnTouchOutSide ? onClose : undefined}>
                <View
                    style={[
                        styles.modalContainer,
                        {
                            justifyContent: justify,
                            backgroundColor: backdropColor || 'rgba(0,0,0,0.6)',
                        },
                    ]}>
                    <TouchableWithoutFeedback>
                        <View
                            style={[
                                style,
                                {
                                    backgroundColor: backgroundColor || '#F8F8F8',
                                },
                            ]}>
                            {loading && <CustomLoading />}
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

export default React.memo(ModalContainer);

const styles = StyleSheet.create({
    modalContainer: { flex: 1 },
    modalInnerContainer: {
        borderRadius: 16,
        margin: scale(32),
    },
});