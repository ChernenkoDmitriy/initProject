import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; // for UI redux logger
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootSaga from '../saga/rootSaga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist:[
        'appState',
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
    persistedReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;