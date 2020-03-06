import { combineReducers } from 'redux';
import appState from './reducersAndActions/appState/appStateReducer';
import theme from './reducersAndActions/appTheme/themeReducer';
import contacts from './reducersAndActions/contacts/contactsReducer';

const rootReducer = combineReducers({
    appState,
    theme,
    contacts,
})

export default rootReducer;