import { takeEvery, put, call } from 'redux-saga/effects';
import { restFactory } from '../../services/restFactory';
import { signUp } from '../redux/reducersAndActions/appState/appStateActions';

const sendhDataRegistration = async (payload) => {
    const { firstName, lastName, password, email } = payload;
    try {
        return await restFactory.IRegistrate(firstName, lastName, password, email);
    } catch (error) {
        console.log('sendhDataRegistration error', error)
    }
}

function* workerRegistration({ type, payload }) {
    const data = yield call(sendhDataRegistration, payload);
    yield put(signUp(true));
};

export function* watchRegistration() {
    yield takeEvery('REGISTRATION', workerRegistration);
};