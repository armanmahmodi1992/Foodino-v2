import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, VStack } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { CustomButton, CustomContainer, CustomInput } from '~/component';
import { usePostUser } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { Colors } from '~/style';
import { image, Style, toast } from '~/utils';

export default function RegisterScreen() {

    const schema = yup.object().shape({
        email: yup.string().email().required("این فیلد الزامی می باشد"),
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

    const { handleSubmit, register } = methods;

    const { showError } = toast.useShowError();
    const { showSuccess } = toast.useShowSuccess();

    const { mutate, isLoading } = usePostUser()

    const handlePostUser = (formData: any) => {
        mutate(formData, {
            onSuccess: (data) => {

                if (data.status === 201) {
                    showSuccess('اطلاعات با موفقیت ثبت شد')
                    navigate('LoginScreen')
                } else {
                    showError("خطایی رخ داده است")
                }
            },
            onError: (error) => {
                console.log('login error =>', error)
            }
        })
    }

    return (
        <CustomContainer isLoading={isLoading}>

            <VStack flex={1} alignItems='center' justifyContent='center' mt='5' px='6' backgroundColor='white' >

                <Image source={{ uri: image.splash }} style={styles.image} />

                <FormProvider {...methods}>

                    <VStack flex={1} w='100%' space='5' alignItems='center' justifyContent='center'>
                        <CustomInput
                            {...register('email')}
                            label="ایمیل"
                            placeholder="ایمیل"
                            keyboardType="email-address"
                            required
                        />
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
                                onPress={handleSubmit(handleSubmit(handlePostUser))}
                                title='ثبت نام'
                                buttonStyle={{ width: 150, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
                            />
                        </HStack>
                    </VStack>

                </FormProvider>
            </VStack>
        </CustomContainer>
    )
}
const styles = StyleSheet.create({
    newUser: {
        fontSize: 18,
        fontWeight: Style.fontWeight.heavy,
    },
    link: {
        fontSize: 18,
        fontWeight: Style.fontWeight.heavy,
        color: Colors.LINK,
        textDecorationLine: 'underline'

    },
    image: {
        width: 200,
        height: 200
    }
})

