import * as Keychain from 'react-native-keychain';

export const SERVICES = {
    CONTACTS:'CONTACTS'
};


export const getSupportedBiometryType = async () => {
    try {
        const result = await Keychain.getSupportedBiometryType();
        return result;
    } catch (error) {
        return null;
    }
};

export const getDataFromKeychain = async (service: string, authenticationPrompt: string) => {
    try {
        let data = await Keychain.getGenericPassword({ service, authenticationPrompt });
        if (data) {
            data = JSON.parse(data.username);
        }
        return data;
    } catch (error) {
        let errorResult = (error.message === 'User canceled the operation.') ? error.message : null;
        return errorResult;
    }
};

export const setDataToKeychain = async (data, service: string, options) => {
    try {
        const dataJSON = JSON.stringify(data);
        const result = await Keychain.setGenericPassword(dataJSON, 'password', {
            ...options,
            accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
            service,
        });
        return result;
    } catch (error) {
        console.warn(error);
        return null;
    }
};

export const removeDataFromKeychain = (servicesArr) => {
    if (Array.isArray(servicesArr) && servicesArr.length) {
        servicesArr.forEach(async item => { await Keychain.resetGenericPassword(item); });
    }
};