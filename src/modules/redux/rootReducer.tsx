import { combineReducers } from 'redux';
import appState from './reducersAndActions/appState/appStateReducer';
import theme from './reducersAndActions/appTheme/themeReducer';
import contacts from './reducersAndActions/contacts/contactsReducer';
import websocketReducer from './reducersAndActions/webSocket/webSocketReducer';
import navigationParam from './reducersAndActions/navigationParam/navigationParamReducer';

const rootReducer = combineReducers({
    appState,
    theme,
    contacts,
    websocketReducer,
    navigationParam,
})

export default rootReducer;