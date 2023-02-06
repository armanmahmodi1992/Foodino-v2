import { Spinner, Box } from 'native-base';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { createImageProgress } from 'react-native-image-progress';
import { Colors } from '~/style';

const Image = createImageProgress(FastImage);

const CustomImage = ({
    imageSource,
    style,
    resizeMode = FastImage.resizeMode.contain,
    local = false,
    children,
    isLoading,
}: {
    imageSource?: any;
    style?: any;
    resizeMode?: 'cover' | 'center' | 'contain' | 'stretch';
    backgroundColor?: any;
    local?: boolean;
    children?: any;
    isLoading?: boolean;
}) => {
    return (
        <>
            <Box
                height={style?.height ?? null}
                width={style?.width ?? null}
                borderRadius={style?.borderRadius ?? null}
                overflow='hidden'
            >
                <Image
                    indicator={() => <Spinner size={24} color={Colors.PRIMARY} />}
                    style={style}
                    source={
                        local
                            ? imageSource
                            : imageSource && imageSource !== null
                                ? {
                                    uri: imageSource,
                                    priority: FastImage.priority.high,
                                }
                                : null
                    }
                    resizeMode={resizeMode}>
                    {isLoading && (
                        <Spinner
                            position="absolute"
                            alignSelf="center"
                            bottom="0"
                            top="0"
                            size={24}
                            color={Colors.PRIMARY}
                        />
                    )}
                    {children && children}
                </Image>
            </Box>
        </>
    );
};

export default CustomImage;