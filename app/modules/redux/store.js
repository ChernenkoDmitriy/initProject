import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import rootReducer from './rootReducer.js';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [logger];
const store = createStore(
    persistedReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware))),
);

const persistor = persistStore(store);

export { store, persistor };