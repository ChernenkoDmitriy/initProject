import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; // for UI redux logger
import rootReducer from './rootReducer';
import rootSaga from '../saga';
import { writeToStorage } from './middlewareRedux';
import { IKeychain } from '../storages/keychain';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, writeToStorage];
const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
);

sagaMiddleware.run(rootSaga);

const syhronizeReduxAndKeyChain = (store, keys: Object) => {
    const { dispatch } = store;
    Object.keys(keys).forEach(async key => {
        const payload = await IKeychain.get(key, '');
        if (payload && typeof payload === 'object') {
            dispatch(payload);
        };
    });
}

syhronizeReduxAndKeyChain(store, IKeychain.SERVICES);

export type AppDispatch = typeof store.dispatch;

export { store };