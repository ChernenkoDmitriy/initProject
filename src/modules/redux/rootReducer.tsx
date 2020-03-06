import { combineReducers } from 'redux';
import appState from './reducersAndActions/appState/appStateReducer';
import theme from './reducersAndActions/appTheme/themeReducer';
import websocketReducer from './reducersAndActions/webSocket/webSocketReducer';
import navigationParam from './reducersAndActions/navigationParam/navigationParamReducer';

const rootReducer = combineReducers({
    appState,
    theme,
    websocketReducer,
    navigationParam,
})

export default rootReducer;