import { combineReducers } from 'redux';
import appState from './reducersAndActions/appState/appStateReducer';
import theme from './reducersAndActions/appTheme/themeReducer';

const rootReducer = combineReducers({
    appState,
    theme,
})

export default rootReducer;