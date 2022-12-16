import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, Input, Text, VStack } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import * as yup from 'yup';
import image from '~/assets/image';
import { CustomButton, CustomInput } from '~/component';
import { useResetPassword, useSearchUser } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { Colors } from '~/style';
import { fontWeight } from '~/utils/Style';
import { useShowError, useShowSuccess } from '~/utils/Toast';

export default function ForgetScreen() {

    const [value, setValue] = React.useState();
    const [status, setStatus] = React.useState('');

    const schema = yup.object().shape({
        // email: yup.string().email().required("این فیلد الزامی می باشد"),
        password: yup
            .string()
            .min(6, 'کلمه عبور نباید کمتر از 6 کاراکتر باشد')
            .max(36, 'کلمه عبور باید کمتر از 36 کاراکتر باشد')
            .required("این فیلد الزامی می باشد"),
        passwordConfirmation: yup
            .string()
            .min(6, 'کلمه عبور نباید کمتر از 6 کاراکتر باشد')
            .max(36, 'کلمه عبور باید کمتر از 36 کاراکتر باشد')
            .required("این فیلد الزامی می باشد")
            .oneOf([yup.ref('password'), null], "کلمه های عبور باید یکسان باشند"),
    });

    const { ...methods } = useForm<Record<string, any>, object>({
        resolver: yupResolver<yup.AnyObjectSchema>(schema),
        mode: 'onChange',
    });

    const handleChange = text => {
        setValue(text)
    };

    const { mutate: searchUser } = useSearchUser()

    const handleSearchUser = (mail: any) => {
        searchUser(mail, {
            onSuccess: (data) => {
                setStatus(data?.data)
                if (data?.data == '') {
                    showError('ایمیل یافت نشد')
                } else {

                }
            },
            onError: (error) => {
                console.log('login error =>', error)
            }
        })
    }

    const id = 1


    const { showError } = useShowError();
    const { showSuccess } = useShowSuccess();

    const { handleSubmit, register } = methods;
    const { mutate } = useResetPassword()

    const handleResetPassword = (item: any) => {

        mutate(({ item, id }), {
            onSuccess: (data) => {
                if (data.status === 200) {
                    showSuccess("رمز با موفقیت ویرایش شد")
                    navigate('LoginScreen')
                }
            },
            onError: (error) => {
                console.log('error =>', error)
            }
        })
    }

    return (

        <View style={styles.container}>
            <Image source={image.splash} style={styles.image} />

            {status == '' ?
                <VStack w='100%' alignItems='center' justifyContent='center' top='-50' flex={1} space='3' px='6'>
                    <Text fontSize='15' alignSelf='flex-end'> ایمیل</Text>
                    <Input w='100%' onChangeText={handleChange} keyboardType='email-address' bgColor={Colors.GARY_5} />

                    <HStack alignItems='center' space='5'>
                        <CustomButton
                            onPress={() => navigate('LoginScreen')}
                            title='انصراف'
                            buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                        />
                        <CustomButton
                            onPress={() => handleSearchUser(value)}
                            title=' جستجو '
                            buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                        />
                    </HStack>

                </VStack> :

                <VStack flex={1} w='100%' space='5' alignItems='center' justifyContent='center'>
                    <FormProvider {...methods}>

                        <CustomInput
                            {...register('password')}
                            label="رمز عبور"
                            placeholder="رمز عبور********"
                            type="password"
                            required
                        />
                        <CustomInput
                            {...register('passwordConfirmation')}
                            label="تکرار رمز عبور"
                            placeholder="تکرار رمز عبور"
                            type="password"
                            required
                        />
                        <HStack space='3'>
                            <CustomButton
                                onPress={() => navigate('LoginScreen')}
                                title='انصراف'
                                buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                            />
                            <CustomButton
                                onPress={handleSubmit(handleSubmit(handleResetPassword))} title=' تنظیم مجدد'
                                buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                            />
                        </HStack>
                    </FormProvider>
                </VStack>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        margin: 5,
        paddingHorizontal: 15
    },
    newUser: {
        fontSize: 18,
        fontWeight: fontWeight.heavy,
    },
    link: {
        fontSize: 18,
        fontWeight: fontWeight.heavy,
        color: '#3f50b5',
        textDecorationLine: 'underline'

    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10
    }
})

