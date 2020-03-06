interface AddContactAction {
    type: String;
    payload: any;
}

interface RemoveContactAction {
    type: String;
    payload: any;
}

export const addAllContact = (payload: any): RemoveContactAction => {
    return ({
        type: 'ADD_ALL_CONTACT',
        payload,
    });
}

export const removeContact = (payload: any): RemoveContactAction => {
    return ({
        type: 'REMOVE_CONTACT',
        payload,
    });
}

export const addContact = (payload: any): AddContactAction => {
    return ({
        type: 'ADD_CONTACT',
        payload,
    });
}

export type Action = AddContactAction | RemoveContactAction;