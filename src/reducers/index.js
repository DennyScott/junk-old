import { combineReducers } from 'redux';
import { programs } from './program';
import { openPrograms } from './openProgram';
import { switches } from './switch';

const rootReducer = combineReducers({
    programs,
    openPrograms,
    switches
});

export default rootReducer;