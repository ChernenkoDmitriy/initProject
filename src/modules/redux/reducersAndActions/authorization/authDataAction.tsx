interface Authorizate {
    type: String;
    payload: {
        email: String,
        password: String,
    };
};

export const authorizate = ({ email, password }): Authorizate => {
    return {
        type: 'AUTHORIZATION',
        payload: { email, password },
    }
}