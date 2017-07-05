import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from 'actions/activeProgram';
import { UPDATE_PASSWORD_INPUT } from 'actions/password-dialog';
import { PASSWORD_DIALOG } from 'programs';

const CURRENT_WINDOW_ID = 0;

const updateStateOfOpenProgram = (state, windowId, updateFunc) => {
    return state.map(openProgram => 
        openProgram.windowId === windowId ? updateFunc(openProgram) : openProgram);
}

export const passwordDialogPrograms = (state = [], action) => {
    switch(action.type) {
        case HIDE_PROGRAM:
            return action.id === PASSWORD_DIALOG ? updateStateOfOpenProgram(state, action.windowId, openProgram => ({ ...openProgram, isShowing: action.isShowing})) : state;
        case FULLSCREEN_PROGRAM:
            return action.id === PASSWORD_DIALOG ? updateStateOfOpenProgram(state, action.windowId, openProgram => ({...openProgram, isFullscreen: action.isFullscreen})) : state;
        case OPEN_PROGRAM:
            return action.id === PASSWORD_DIALOG ? [...state, {id: action.id, windowId: CURRENT_WINDOW_ID++, isShowing:true, isFullscreen:false, payload: action.payload}] : state;
        case CLOSE_PROGRAM:
            return action.id === PASSWORD_DIALOG ? state.filter(openProgram => openProgram.windowId !== action.windowId) : state;
        case UPDATE_PASSWORD_INPUT:
            return updateStateOfOpenProgram(state, action.windowId, openProgram => ({ ...openProgram, payload: { ...(openProgram.payload), inputText: action.inputText }}));
        default:
            return state;
    }
}