import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, Text } from 'native-base';
import React, { useLayoutEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet, View } from 'react-native';
import * as yup from 'yup';
import image from '~/assets/image';
import { CustomButton, CustomInput } from '~/component';
import { useLogin } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';
import { fontWeight } from '~/utils/Style';
import { useShowMessage } from '~/utils/Toast';

export default function Login() {

  const { show } = useShowMessage();
  const schema = yup.object().shape({
    email: yup.string().email().required('required'),
    password: yup
      .string()
      .min(6, 'Use 8 or more characters with a mix of letters,numbers & symbols')
      .max(36, 'Must be 36 characters or less')
      .required('Required'),
  });
  const { setIsLogin } = authStore(state => state);
  const { setToken } = authStore(state => state);

  const { isLogin } = authStore();
  useLayoutEffect(() => {
    if (isLogin) {
      navigate('UserScreen')
    }
  });

  const { ...methods } = useForm<Record<string, any>, object>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
    mode: 'onChange',
  });

  const { handleSubmit, register } = methods;

  const { mutate } = useLogin()
  const handleUserLogin = (formData: any) => {
    mutate(formData, {
      onSuccess: (data) => {
        if (data.data != '') {
          setIsLogin(true);
          setToken(data.data);
          navigate('UserScreen')
        } else {
          show("ایمیل یا رمز عبور اشتباه است.")
        }
      },
      onError: (error) => {
        console.log('login error =>', error)
      }
    })
  }

  return (
    <View style={styles.container}>
      <Image source={image.splash} style={styles.image} />
      <FormProvider {...methods}>
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
        <CustomButton
          onPress={handleSubmit(handleSubmit(handleUserLogin))}
          title='ورود'
          buttonStyle={{ width: 180, height: 35, backgroundColor: Colors.SECONDARY_LIGHT, marginTop: 20 }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
        />
        <HStack justifyContent="center" mt='4'>
          <Text style={styles.link} onPress={() => navigate('RegisterScreen')}>ثبت نام</Text>
          <Text style={styles.newUser}>کاربر جدید.{"   "} </Text>
        </HStack>
      </FormProvider>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
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
    height: 200
  }
})

