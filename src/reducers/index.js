import { combineReducers } from 'redux';
import { programs } from './program';
import { openPrograms } from './openProgram';
import { switches } from './switch';
import { variables } from './variable';

const rootReducer = combineReducers({
    programs,
    openPrograms,
    switches,
    variables
});

export default rootReducer;