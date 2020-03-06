import { getDataFromKeychain, setDataToKeychain, removeDataFromKeychain, SERVICES } from "./services"

const set = async (data, service: string, options?: any) => {
    const result = setDataToKeychain(data, service, options);
    return result;
}

const get = async (service: string, authenticationPrompt: string) => {
    const result = await getDataFromKeychain(service, authenticationPrompt);
    return result;
}

const remove = async (servicesArr: Array<string>) => {
    const result = await removeDataFromKeychain(servicesArr);
    return result;
}

export const IKeychain = {
    set,
    get,
    remove,
    SERVICES,
}