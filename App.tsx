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
import themStore from '~/store/ThemeStore';
import { themeColor } from '~/style';
import { useTheme } from '@react-navigation/native';

const queryClient = new QueryClient()

export default function App() {

  const { theme } = themStore();
  const { isConnected } = useNetInfo();
  if (isConnected === false) {
    return <AppOfflineNotification />;
  }

  const { colors } = useTheme();
  const th = theme ? themeColor.customDarkTheme : themeColor.customDefaultTheme

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={theme ? "light-content" : "dark-content"} backgroundColor={theme ? "#000000" : "#ffffff"} />
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

