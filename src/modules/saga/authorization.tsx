import { takeEvery, put, call } from 'redux-saga/effects';
import { restFactory } from '../../services/restFactory';
import { signUp } from '../redux/reducersAndActions/appState/appStateActions';

interface PayloadProps {
    email: string,
    password: string,
}

const sendhDataAuth = async (payload: PayloadProps): Promise<Object | undefined> => {
    const { email, password } = payload;
    try {
        return await restFactory.IAuthorizate(email, password);
    } catch (error) {
        console.log('sendhDataAuth error', error)
    }
}

function* workerAthorization({ type, payload }) {
    const data = yield call(sendhDataAuth, payload);
    yield put(signUp(true));
};

export function* watchAthorization() {
    yield takeEvery('AUTHORIZATION', workerAthorization);
};