import { IKeychain } from "../../storages/keychain";

export const writeToStorage = store => next => async action => {
    let result = next(action);
    if (action.type === 'REMOVE_CONTACT' || action.type === 'ADD_CONTACT') {
        const state = store.getState();
        await IKeychain.set({ type: 'ADD_ALL_CONTACT', payload: state.contacts }, IKeychain.SERVICES.CONTACTS);
    }
    return result;
}