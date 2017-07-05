import { PASSWORD_DIALOG } from 'programs';

//Actions
export const OPEN_PROGRAM = 'OPEN_PROGRAM';
export const CLOSE_PROGRAM = 'CLOSE_PROGRAM';
export const HIDE_PROGRAM = 'HIDE_PROGRAM';
export const FULLSCREEN_PROGRAM = 'FULLSCREEN_PROGRAM';

//Reducer Helpers
const CURRENT_WINDOW_ID = 0;

const updateStateOfOpenProgram = (state, windowId, updateFunc) => {
    return state.map(openProgram => 
        openProgram.windowId === windowId ? updateFunc(openProgram) : openProgram);
}

//Action Creators
export function openNewProgram(id, payload) {
    return {
        type: OPEN_PROGRAM,
        id,
        payload
    }
}

export function closeProgram(windowId) {
    return {
        type: CLOSE_PROGRAM,
        windowId
    }
}

export function hideProgram(windowId, isShowing) {
    return {
        type: HIDE_PROGRAM,
        windowId,
        isShowing
    }
}

export function fullscreenProgram(windowId, isFullscreen) {
    return {
        type: FULLSCREEN_PROGRAM,
        windowId,
        isFullscreen
    }
}

export function openProgram(file) {
    return dispatch => checkForPassword(file, dispatch, () => dispatch(openNewProgram(file.filetype, file.payload)))
}

export function checkForPassword(itemToCheck, dispatch, successCallback) {
    if(itemToCheck.password) {
        dispatch(openNewProgram(PASSWORD_DIALOG, {neededPassword: itemToCheck.password, inputText: '', successCallback}))
    } else {
        successCallback();
    }
}