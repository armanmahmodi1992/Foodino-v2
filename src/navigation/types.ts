
import {MainStackParamList} from './MainStack';
import {TabNavigatorStackParamList} from './TabNavigator';
import {CartStackParamList} from './CartStack';
import {HomeStackParamList} from './HomeStack';
import {AuthStackParamList} from './AuthStack';
import {OrdersStackParamList} from './OrdersStack';
import {ProfileStackParamList} from './ProfileStack';
export type RootStackParamList = 
MainStackParamList&
  TabNavigatorStackParamList&
  HomeStackParamList&
  AuthStackParamList&
  OrdersStackParamList&
  ProfileStackParamList&
  CartStackParamList


  declare global {
    // Specifying this type is important if you heavily use useNavigation, Link etc. in your app since it'll ensure type-safety.
    // READ MORE: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc
  
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface RootParamList extends RootStackParamList {}
    }
  }

