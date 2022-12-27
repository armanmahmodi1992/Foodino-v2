import { yupResolver } from '@hookform/resolvers/yup';
import { HStack, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';
import image from '~/assets/image';
import { CustomButton, CustomInput } from '~/component';
import { useLogin } from '~/hooks';
import { navigate } from '~/navigation/Methods';
import { authStore } from '~/store/AuthStore';
import { Colors } from '~/style';
import { fontWeight } from '~/utils/Style';
import { storeData } from '~/services/storage';
import { useShowError } from '~/utils/Toast';

export default function Login() {

  const { isLogin } = authStore();
  const { showError } = useShowError();
  const { setIsLogin } = authStore(state => state);
  const { setToken } = authStore(state => state);


  const schema = yup.object().shape({
    email: yup.string().email().required('این فیلد الزامی می باشد'),
    password: yup
      .string()
      .min(6)
      .max(36)
      .required('این فیلد الزامی می باشد'),
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
          showError("ایمیل یا رمز عبور اشتباه است.")
        }
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
          <Text style={styles.forgetPass} onPress={() => navigate('ForgetPassword')}> فراموشی رمز عبور</Text>
          <CustomButton
            onPress={handleSubmit(handleSubmit(handleUserLogin))}
            title='ورود'
            buttonStyle={{ width: '100%', height: 35, backgroundColor: Colors.SECONDARY_LIGHT }} textStyle={{ fontSize: 20, color: Colors.PRIMARY_LIGHT }}
          />
          <HStack justifyContent="center" mt='3' >
            <Text style={styles.register} onPress={() => navigate('RegisterScreen')}>ثبت نام</Text>
            <Text style={styles.newUser}>کاربر جدید.{"   "} </Text>
          </HStack>
        </VStack>
      </FormProvider>

    </VStack>
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
    fontWeight: fontWeight.heavy,
  },
  register: {
    fontSize: 18,
    fontWeight: fontWeight.heavy,
    color: Colors.LINK,
    textDecorationLine: 'underline'

  },
  forgetPass: {
    fontSize: 18,
    fontWeight: fontWeight.heavy,
    color: Colors.LINK,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end'

  },
  image: {
    width: 200,
    height: 200
  }
})

