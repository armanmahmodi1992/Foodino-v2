import { useToast, Box, Text } from 'native-base'
import { fontWeight } from '~/utils/Style';
import { useTheme } from '@react-navigation/native';

export const useShowError = () => {
    const toast = useToast()
    const { colors } = useTheme();

    const showError = (title: string) => {
        toast.show({
            render: () => {
                return <Box w='200' h='90' alignItems='center' justifyContent='center' bg={colors.ERROR} px="2" py="1" rounded="lg" mb={5}>
                    <Text color={colors.PRIMARY_LIGHT} fontWeight={fontWeight.bold} fontSize='15'>{title}</Text>
                </Box>;
            }
        });
    }
    return { showError }
}
export const useShowSuccess = () => {
    const toast = useToast()
    const showSuccess = (title: string) => {
        toast.show({
            render: () => {
                return <Box w='200' h='90' alignItems='center' justifyContent='center' bg={colors.SUCCESS} px="2" py="1" rounded="lg" mb={5}>
                    <Text color={colors.PRIMARY_LIGHT} fontWeight={fontWeight.bold} fontSize='15'>{title}</Text>
                </Box>;
            }
        });
    }
    return { showSuccess }
}