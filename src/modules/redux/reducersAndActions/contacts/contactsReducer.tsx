import { Action } from "./contactsActions";

export default function contacts(state: Array<any> = [], action: Action) {
    const { type, payload } = action;
    switch (type) {
        case 'REMOVE_CONTACT':
            return state.filter(item => item.id != payload.id);
        case 'ADD_CONTACT':
            state.push(payload);
            return [...state];
        case 'ADD_ALL_CONTACT':
            return [...payload];
        default:
            return state;
    }
}