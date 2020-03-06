import { LINKS } from "../../../config";
import Axios from 'axios';

const url = LINKS.REGISTRATION;

const registration = async (firstName, lastName, password, email) => {
    try {
        let response = await Axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: { firstName, lastName, password, email },
            url,
            timeout: 60000,
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

export const IRegistrate = async (firstName, lastName, password, email) => {
    const response = await registration(firstName, lastName, password, email);
    return checkReponse(response);
}