// combine all of the reducers
import {combineReducers} from 'redux';
import {postMessage} from './postMessage';

export const reducers = combineReducers({
    postMessage
})