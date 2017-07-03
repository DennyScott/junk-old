import { combineReducers } from 'redux';
import { programs } from './program';
import { openPrograms } from './openProgram';
import { switches } from './switch';
import { variables } from './variable';
import { drive } from './drive';
import { user } from './user';

const rootReducer = combineReducers({
    programs,
    openPrograms,
    switches,
    variables,
    drive,
    user
});

export default rootReducer;