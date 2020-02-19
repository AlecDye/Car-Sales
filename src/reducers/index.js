import { combineReducers } from 'redux';
import { addReducer } from './addReducer';
// import { removeReducer } from './removeReducer';

export const rootReducer = combineReducers({
    addReducer
    // removeReducer
});