import { combineReducers } from 'redux';

const language = () => { return { test: 'test' } };

const rootReducer = combineReducers({
    language,
})

export default rootReducer;