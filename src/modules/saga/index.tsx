import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    try {
        yield all([
            
        ]);
    } catch (error) {
        console.warn('error in rootSaga ', error);
    }
}
