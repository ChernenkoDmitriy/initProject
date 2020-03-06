import { LINKS } from "../../../config";
import Axios from 'axios';

const url = LINKS.AUTHORIZATION;

const authorization = async (email: string, password: string) => {
    try {
        let response = await Axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: { email, password },
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

const checkReponse = (response): Object => {
    console.log('response', { response })
    return { response };
}

export const IAuthorizate = async (email: string, password: string): Promise<Object> => {
    const response = await authorization(email, password);
    return checkReponse(response);
}