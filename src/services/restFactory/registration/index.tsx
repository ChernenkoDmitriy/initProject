import { LINKS } from "../../../config";
import Axios from 'axios';

const url = LINKS.REGISTRATION;

const registration = async (email, firstName, lastName, password) => {
    try {
        let response = await Axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: { email, firstName, lastName, password },
            url,
        }).then(response => {
            console.log('response', response)
            return Promise.resolve(response);
        }).catch(error => {
            console.log('error', error)
            let response = error.response;
            if (error.code === 'ECONNABORTED') {
                response = { data: { body: { cmd: 'timeout' } } };
            }
            return Promise.resolve(response);
        });
        return response.data;
    } catch (error) {
        return { body: { cmd: 'timeout' } };
    }
};

const checkReponse = (response) => {
    console.log('response', response)
}

export const registrate = async (email, firstName, lastName, password) => {
    const response = await registration(email, firstName, lastName, password);
    return checkReponse(response);
}