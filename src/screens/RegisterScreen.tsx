import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, VStack } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';
import image from '~/assets/image';
import { CustomButton, CustomInput } from '~/component';
import { usePostUser } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { Colors } from '~/style';
import { fontWeight } from '~/utils/Style';
import { useShowError, useShowSuccess } from '~/utils/Toast';

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

    const { showError } = useShowError();
    const { showSuccess } = useShowSuccess();

    const { mutate } = usePostUser()

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

        <VStack flex={1} alignItems='center' justifyContent='center' mt='5' px='6' >

            <Image source={image.splash} style={styles.image} />

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
    )
}
const styles = StyleSheet.create({
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
        height: 200
    }
})

