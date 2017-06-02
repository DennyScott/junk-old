import { OPEN_PROGRAM, CLOSE_PROGRAM } from '../actions/openProgram';

export const openPrograms = (state = [], action) => {
    switch(action.type) {
        case OPEN_PROGRAM:
            return [...state, {id: action.id, windowId: action.windowId}];
        case CLOSE_PROGRAM:
            return state.filter(openProgram =>
                openProgram.id !== action.id || openProgram.windowId !== action.windowId
            );
        default:
            return state;
    }
}