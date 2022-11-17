import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLocalData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
  }

  export const getLocalData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch(e) {
        console.error(e);
    }
  }