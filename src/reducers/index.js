import {combineReducers} from 'redux';
import chatReducers from './chatReducers';
import experienceReducers from './experienceReducers';

export default combineReducers({
    chatReducers,
    experienceReducers
});