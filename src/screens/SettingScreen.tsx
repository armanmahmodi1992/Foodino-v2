
import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, ScrollView, VStack } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { CustomButton, CustomInput } from '~/component';
import { useUpdateUser } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';
import { image, toast, Style } from '~/utils'

export default function SettingScreen() {

    const { showSuccess } = toast.useShowSuccess();
    const { mutate } = useUpdateUser()
    const { token } = authStore();
    const [{ email, name, address, password, pic, id }] = token;

    const schema = yup.object().shape({
        name: yup.string(),
        address: yup.string(),
        email: yup.string().email(),
        password: yup
            .string()
            .min(6, 'Use 8 or more characters with a mix of letters,numbers & symbols')
            .max(36, 'Must be 36 characters or less')
    });

    const { setIsLogin } = authStore(state => state);

    const { ...methods } = useForm<Record<string, any>, object>({
        resolver: yupResolver<yup.AnyObjectSchema>(schema),
        mode: 'onChange',
    });

    const { handleSubmit, register } = methods;

    const handleUpdateUser = (item: any) => {

        mutate((item), {
            onSuccess: (data) => {
                if (data.status === 200) {
                    setIsLogin(false);
                    showSuccess("اطلاعات با موفقیت ویرایش شد")
                    navigate('LoginScreen')
                }

            },
            onError: (error) => {
                console.log('login error =>', error)
            }
        })
    }

    return (

        <ScrollView>
            <FormProvider {...methods} >
                <VStack flex={1}>
                    <Image source={{ uri: image.header }} style={styles.image} />
                    <Image source={{ uri: image.splash }} style={styles.logo} />
                    <VStack mt='3' p='2' space='5' alignItems='center' borderBottomWidth='4' borderBottomColor={Colors.GARY_5} >


                        <CustomInput
                            {...register('id')}
                            placeholder='شناسه'
                            defaultValue={id}
                            bgColor='lightgray'
                            borderRadius='md'
                            textAlign='right'
                        />
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
                    <HStack flexDirection='row-reverse' mt='8' p='4' space='4' alignItems='center'>
                        <CustomButton title='ویرایش' onPress={handleSubmit(handleSubmit(handleUpdateUser))} buttonStyle={{ width: 100, height: 35, backgroundColor: Colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }} />
                        <CustomButton title='انصراف' onPress={() => navigate('UserScreen')} buttonStyle={{ width: 100, height: 35, backgroundColor: Colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }} />
                    </HStack>
                </VStack >
            </FormProvider>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    imageContainer: {
        width: '100%',
        height: 250,
        backgroundColor: Colors.GARY_5
    },
    image: {
        width: '100%',
        height: 250,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.GARY_5,
        backgroundColor: Colors.GARY_4
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        top: -50,
        borderWidth: 1,
        borderColor: Colors.GARY_5,
        alignSelf: 'center',
        backgroundColor: Colors.PRIMARY_LIGHT,
    },
    setting: {
        position: 'absolute',
        margin: 4,
        marginLeft: 7,
        width: 33,
        height: 33,
        borderRadius: 16
    },
    text: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_LIGHT,
        borderRadius: 10,
        width: '97%',
        height: 35,
        textAlign: 'right',
        fontSize: 19,
        fontWeight: Style.fontWeight.bold,
        justifyContent: 'center'
    },
    logoutText: {
        fontSize: 18,
        fontWeight: Style.fontWeight.bold,

    }
});