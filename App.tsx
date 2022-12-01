import { SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '~/navigation/MainStack';
import { NativeBaseProvider } from 'native-base';
import { navigationRef } from '~/navigation/Methods';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
const queryClient = new QueryClient()

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

