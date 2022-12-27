import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export default setData;