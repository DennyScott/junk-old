import { combineReducers } from 'redux';
import { programs } from './program';
import { switches } from './switch';
import { variables } from './variable';
import { drive } from './drive';
import { user } from './user';
import activePrograms from './activeProgram/';

console.log(activePrograms);
console.log(drive);

const rootReducer = combineReducers({
    programs,
    activePrograms,
    switches,
    variables,
    drive,
    user
});

export default rootReducer;