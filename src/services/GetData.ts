import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string) => {
  let res = null;
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    value && (res = JSON.parse(value));
  } catch (e) {
    // error reading value
  }
  return res;
};

export default getData;