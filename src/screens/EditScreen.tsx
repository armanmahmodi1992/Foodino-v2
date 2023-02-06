
import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@react-navigation/native';
import { HStack, ScrollView, VStack } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import { CustomButton, CustomContainer, CustomImage, CustomInput } from '~/component';
import { useUpdateUser } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { image, toast } from '~/utils';

export default function EditScreen() {

    const { colors } = useTheme();
    const { showSuccess } = toast.useShowSuccess();
    const { mutate: updateUser, isLoading } = useUpdateUser()

    const { token } = authStore();
    const [{ email, name, address, password, pic, id }] = token;

    const schema = yup.object().shape({
        name: yup.string(),
        address: yup.string(),
        email: yup.string().email('ایمیل وارد شده معتبر نمی باشد.'),
        password: yup
            .string()
            .min(6, 'کلمه عبور نباید کمتر از 6 کاراکتر باشد')
            .max(36, 'کلمه عبور باید کمتر از 36 کاراکتر باشد')
    });

    const { setIsLogin } = authStore(state => state);

    const { ...methods } = useForm<Record<string, any>, object>({
        resolver: yupResolver<yup.AnyObjectSchema>(schema),
        mode: 'onChange',
    });

    const { handleSubmit, register } = methods;

    const handleUpdateUser = (item: any) => {

        updateUser((item), {
            onSuccess: (data) => {
                if (data.status === 200) {
                    setIsLogin(false);
                    showSuccess("اطلاعات با موفقیت ویرایش شد")
                }

            },
            onError: (error) => {
                console.log('login error =>', error)
            }
        })
    }

    return (
        <CustomContainer isLoading={isLoading}>
            <ScrollView>
                <FormProvider {...methods} >
                    <CustomImage imageSource={image.header} style={[styles.image, { borderColor: colors.GARY_4, backgroundColor: colors.GARY_4 }]} resizeMode='cover' />
                    <CustomImage imageSource={image.splash} style={[styles.logo, { borderColor: colors.GARY_4, backgroundColor: colors.GARY_1 }]} resizeMode='cover' />
                    <VStack px='4' space='2' alignItems='center' >

                        <CustomInput
                            {...register('name')}
                            placeholder="نام"
                            defaultValue={name}
                            required
                        />
                        <CustomInput
                            {...register('email')}
                            placeholder="ایمیل"
                            defaultValue={email}
                            keyboardType="email-address"
                            required
                        />
                        <CustomInput
                            {...register('address')}
                            placeholder="آدرس"
                            defaultValue={address}
                            required
                        />
                        <CustomInput
                            {...register('password')}
                            placeholder="رمز عبور"
                            defaultValue={password}
                            required
                        />
                    </VStack>
                    <HStack flexDirection='row-reverse' mt='3' p='2' space='4' justifyContent='center'>
                        <CustomButton title='انصراف' onPress={() => navigate('SettingScreen')} buttonStyle={{ width: 100, height: 35, backgroundColor: colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: colors.PRIMARY_LIGHT }} />
                        <CustomButton title='ویرایش' onPress={handleSubmit(handleSubmit(handleUpdateUser))} buttonStyle={{ width: 100, height: 35, backgroundColor: colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: colors.PRIMARY_LIGHT }} />
                    </HStack>
                </FormProvider>
            </ScrollView>
        </CustomContainer>

    )
}

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 250,
        borderRadius: 10
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: -50,
        borderWidth: 1,
        alignSelf: 'center'
    },
    setting: {
        position: 'absolute',
        margin: 4,
        marginLeft: 7,
        width: 33,
        height: 33,
        borderRadius: 16
    }
});