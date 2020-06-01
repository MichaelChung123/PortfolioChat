import {combineReducers} from 'redux';
import chatReducers from './chatReducers';
import socketReducers from './socketReducers';

export default combineReducers({
    chatReducers,
    socketReducers
});