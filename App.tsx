import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppOfflineNotification } from '~/component';
import HomeStack from '~/navigation/MainStack';
import { navigationRef } from '~/navigation/Methods';
import { Colors } from '~/style';
const queryClient = new QueryClient()

export default function App() {

  const { isConnected } = useNetInfo();

  if (isConnected === false) {
    return <AppOfflineNotification />;
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={false} translucent={false} backgroundColor={Colors.PRIMARY_LIGHT} />
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

