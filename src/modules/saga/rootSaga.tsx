import { all, fork } from 'redux-saga/effects'
import { watchAthorization } from './authorization'
import { watchWebsocket } from './websocket'
import { watchRegistration } from './registration';

export default function* rootSaga() {
    try {
        yield all([
            fork(watchWebsocket),
            fork(watchAthorization),
            fork(watchRegistration),
        ]);
    } catch (error) {
        console.warn('error in rootSaga ', error);
    }
}