import { combineReducers } from 'redux';
import { programs } from './program';
import { openPrograms } from './openProgram';

const rootReducer = combineReducers({
    programs,
    openPrograms,
});

export default rootReducer;