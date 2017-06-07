import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from '../actions/openProgram';

export const openPrograms = (state = [], action) => {
    switch(action.type) {
        case OPEN_PROGRAM:
            return [...state, {id: action.id, windowId: action.windowId, isShowing:true, isFullscreen:false}];
        case CLOSE_PROGRAM:
            return state.filter(openProgram =>
                openProgram.id !== action.id || openProgram.windowId !== action.windowId
            );
        case HIDE_PROGRAM:
            return state.map(openProgram => 
                openProgram.windowId === action.windowId 
                    ? { ...openProgram, isShowing: action.isShowing} 
                    : openProgram);
        case FULLSCREEN_PROGRAM:
            return state.map(openProgram => 
                openProgram.windowId === action.windowId 
                    ? { ...openProgram, isFullscreen: action.isFullscreen} 
                    : openProgram);
        default:
            return state;
    }
}