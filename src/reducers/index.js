import { combineReducers } from 'redux';
import { programs } from './program';
import { openPrograms } from './openProgram';
import { switches } from './switch';
import { variables } from './variable';
import { drive } from './drive';

const rootReducer = combineReducers({
    programs,
    openPrograms,
    switches,
    variables,
    drive
});

export default rootReducer;