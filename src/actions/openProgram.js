import store from '../store';

export const OPEN_PROGRAM = 'OPEN_PROGRAM';
export const CLOSE_PROGRAM = 'CLOSE_PROGRAM';
export const HIDE_PROGRAM = 'HIDE_PROGRAM';
export const FULLSCREEN_PROGRAM = 'FULLSCREEN_PROGRAM';
export const OPEN_FOLDER = 'OPEN_FOLDER';
export const BACK_FOLDER = 'BACK_FOLDER';
export const FORWARD_FOLDER = 'FORWARD_FOLDER';
export const UP_FOLDER = 'UP_FOLDER';

export function openNewFolder(windowId, folder) {
    return {
        type: OPEN_FOLDER,
        windowId,
        folder
    }
}

export function backFolder(windowId) {
        return {
            type: BACK_FOLDER,
            windowId,
        }
}

export function forwardFolder(windowId) {
    return {
        type: FORWARD_FOLDER,
        windowId
    }
}

function navtigateUpFolder(windowId) {
    return {
        type: UP_FOLDER,
        windowId
    }
}

export function upFolder(windowId) {
    return dispatch => 
        store.getState().openPrograms.forEach(program => 
            program.windowId === windowId && program.payload.location.length > 0 && dispatch(navtigateUpFolder(windowId))
        );
}

export function openFolder(windowId, folder) {
    return dispatch => {
        console.log(folder);
        dispatch(openNewFolder(windowId, folder));
    }
}
export function openNewProgram(id, payload) {
    return {
        type: OPEN_PROGRAM,
        id,
        payload
    }
}

export function closeProgram(id, windowId) {
    return {
        type: CLOSE_PROGRAM,
        id,
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
    return dispatch => {
        console.log(file);
        dispatch(openNewProgram(file.filetype, file.payload));
    }
}