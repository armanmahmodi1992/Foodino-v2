import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeStack from '~/navigation/MainStack';
import { navigationRef } from '~/navigation/Methods';
import { Colors } from '~/style';
const queryClient = new QueryClient()

export default function App() {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={false} backgroundColor={Colors.PRIMARY_LIGHT} />
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider >
          <NavigationContainer ref={navigationRef}>

            <HomeStack />

          </NavigationContainer>
        </NativeBaseProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

