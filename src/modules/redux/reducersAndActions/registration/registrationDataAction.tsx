interface Registrate {
    type: String;
    payload: Object;
};

export const registrate = ({ firstName, lastName, email, password }: Object): Registrate => {
    return {
        type: 'REGISTRATION',
        payload: { firstName, lastName, email, password },
    }
}