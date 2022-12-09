import { useToast, Box, Text } from 'native-base'
import { Colors } from '~/style';
import { fontWeight } from '~/utils/Style';

export const useShowMessage = () => {
    const toast = useToast()
    const show = (title: string) => {
        toast.show({
            render: () => {
                return <Box w='200' h='90' alignItems='center' justifyContent='center' bg={Colors.ERROR} px="2" py="1" rounded="lg" mb={5}>
                    <Text color={Colors.PRIMARY_LIGHT} fontWeight={fontWeight.bold} fontSize='15'>{title}</Text>
                </Box>;
            }
        });
    }
    return { show }
}