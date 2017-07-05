import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from 'actions/activeProgram';
import { NOTEPAD } from 'programs';

const CURRENT_WINDOW_ID = 0;

const updateStateOfOpenProgram = (state, windowId, updateFunc) => {
    return state.map(openProgram => 
        openProgram.windowId === windowId ? updateFunc(openProgram) : openProgram);
}

export const notepadPrograms = (state = [], action) => {
    switch(action.type) {
        case HIDE_PROGRAM:
            return action.id === NOTEPAD ? updateStateOfOpenProgram(state, action.windowId, openProgram => ({ ...openProgram, isShowing: action.isShowing})) : state;
        case FULLSCREEN_PROGRAM:
            return action.id === NOTEPAD ? updateStateOfOpenProgram(state, action.windowId, openProgram => ({...openProgram, isFullscreen: action.isFullscreen})) : state;
        case OPEN_PROGRAM:
            return action.id === NOTEPAD ? [...state, {id: action.id, windowId: CURRENT_WINDOW_ID++, isShowing:true, isFullscreen:false, payload: action.payload}] : state;
        case CLOSE_PROGRAM:
            return action.id === NOTEPAD ? state.filter(openProgram => openProgram.windowId !== action.windowId) : state;
        default:
            return state;
    }
}