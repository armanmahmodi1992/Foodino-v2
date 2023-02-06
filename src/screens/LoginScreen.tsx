import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@react-navigation/native';
import { HStack, Stack, Text, VStack } from 'native-base';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
import { CustomButton, CustomContainer, CustomImage, CustomInput } from '~/component';
import { useLogin } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { image, Style, toast } from '~/utils';

export default function Login() {

  const { colors } = useTheme();
  const { setIsLogin } = authStore(state => state);
  const { setToken } = authStore(state => state);
  const { showError } = toast.useShowError();

  const schema = yup.object().shape({
    email: yup.string().email('ایمیل وارد شده معتبر نمی باشد').required('این فیلد الزامی می باشد'),
    password: yup
      .string()
      .min(6, '')
      .max(36, '')
      .required('این فیلد الزامی می باشد'),
  });

  const { ...methods } = useForm<Record<string, any>, object>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
    mode: 'onChange',
  });

  const { handleSubmit, register } = methods;

  const { mutate, isLoading } = useLogin()

  const handleUserLogin = (formData: any) => {

    mutate(formData, {
      onSuccess: (data) => {
        if (data.data != '') {
          setIsLogin(true);
          setToken(data.data);
          navigate('UserScreen')

        } else {
          showError("ایمیل یا رمز عبور اشتباه است.")
        }
      }
    })
  }

  return (
    <CustomContainer isLoading={isLoading}>
      <VStack flex={1} alignItems='center' justifyContent='center' px='4' >
        <Stack pt='40' >
          <CustomImage imageSource={image.splash} style={styles.image} resizeMode='cover' />
        </Stack>
        <FormProvider {...methods}>
          <VStack flex={1} w='100%' space='5' justifyContent='center'>
            <CustomInput
              {...register('email')}
              label="ایمیل"
              placeholder="cooper@example.com"
              keyboardType="email-address"
              required
            />
            <CustomInput
              {...register('password')}
              label="رمز عبور"
              placeholder="********"
              type="password"
              required
            />
            <Text style={[styles.forgetPass, { color: colors.LINK }]} onPress={() => navigate('ForgetPassword')}> فراموشی رمز عبور</Text>
            <CustomButton
              onPress={handleSubmit(handleSubmit(handleUserLogin))}
              title='ورود'
              buttonStyle={{ width: '100%', height: 35, backgroundColor: colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: colors.PRIMARY_LIGHT }}
            />
            <HStack justifyContent="center" mt='3' space='2' >
              <Text style={[styles.newUser, { color: colors.GARY_1 }]}>تا کنون ثبت نام نکرده اید؟</Text>
              <Text style={[styles.register, { color: colors.LINK }]} onPress={() => navigate('RegisterScreen')}>ثبت نام</Text>
            </HStack>
          </VStack>
        </FormProvider>

      </VStack>
    </CustomContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    padding: 8
  },
  newUser: {
    fontSize: 18,
    fontWeight: Style.fontWeight.heavy,
  },
  register: {
    fontSize: 18,
    fontWeight: Style.fontWeight.heavy,
    textDecorationLine: 'underline'

  },
  forgetPass: {
    fontSize: 18,
    fontWeight: Style.fontWeight.heavy,
    textDecorationLine: 'underline'

  },
  image: {
    width: 200,
    height: 100,
  }
})

