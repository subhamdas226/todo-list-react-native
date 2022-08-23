
import AsyncStorage from '@react-native-async-storage/async-storage';

let STORAGE_KEY = '@USER_DATA';

const saveData = async (data) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        console.log('Data successfully saved')
    } catch (e) {
        console.log('Failed to save the data to the storage')
    }
}

const readData = async () => {
    try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
            return value
            // console.log(value);
        }
    } catch (e) {
        console.log('Failed to fetch the input from storage');
    }
};

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('Storage successfully cleared!');
    } catch (e) {
        alert('Failed to clear the async storage.');
    }
};


export { saveData, readData, clearStorage }