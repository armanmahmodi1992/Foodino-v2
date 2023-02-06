import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppOfflineNotification } from '~/component';
import HomeStack from '~/navigation/MainStack';
import { navigationRef } from '~/navigation/Methods';
import themStore from '~/store/ThemeStore';
import { themeColor } from '~/style';

const queryClient = new QueryClient()

export default function App() {

  const { theme } = themStore();
  const { isConnected } = useNetInfo();

  if (isConnected === false) {
    return <AppOfflineNotification />;
  }

  const th = theme ? themeColor.customDarkTheme : themeColor.customDefaultTheme

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider >
          <NavigationContainer ref={navigationRef} theme={th}>

            <HomeStack />
          </NavigationContainer>
        </NativeBaseProvider>
      </QueryClientProvider>
    </SafeAreaView>

  );
}

