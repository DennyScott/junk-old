import { combineReducers } from 'redux';
import { programs } from './program';

const rootReducer = combineReducers({
    programs,
});

export default rootReducer;