
import {  DefaultTheme, DarkTheme } from '@react-navigation/native';

export const customDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      PRIMARY : '#e8eaf6',
      PRIMARY_LIGHT : '#ffffff',
      PRIMARY_DARK : '#b6b8c3',
      SECONDARY : '#f96509',
      SECONDARY_LIGHT : '#ff9642',
      SECONDARY_DARK : '#be3300',
      TEXT_ON_PRIMARY : '#000000',
      TEXT_ON_SECONDARY : '#000000',

      GARY_1 : '#333333',
      GARY_2 : '#4F4F4F',
      GARY_3 : '#828282',
      GARY_4 : '#AEAFB4',
      GARY_5 : '#DEE0E5',
      GARY_6 : '#eeeeee',

      INFO : '#3583EB',
      SUCCESS : '#1CA24A',
      WARNING : '#FFBD0A',
      ERROR : '#BF1A1A',
      LINK : '#0288d1',
      WHITE:'#ffffff'
    }
  }

  export const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      PRIMARY : '#212121',
      PRIMARY_LIGHT : '#424242',
      PRIMARY_DARK : '#000000',
      SECONDARY : '#f96509',
      SECONDARY_LIGHT : '#ff9642',
      SECONDARY_DARK : '#be3300',
      TEXT_ON_PRIMARY : '#ffffff',
      TEXT_ON_SECONDARY : '#ffffff',

      GARY_1 : '#eeeeee',
      GARY_2 : '#DEE0E5',
      GARY_3 : '#AEAFB4',
      GARY_4 : '#828282',
      GARY_5 : '#4F4F4F',
      GARY_6 : '#333333',
    

      INFO : '#3583EB',
      SUCCESS : '#1CA24A',
      WARNING : '#FFBD0A',
      ERROR : '#BF1A1A',
      LINK : '#0288d1',
      WHITE:'#ffffff'
      
    }
  }