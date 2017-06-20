export const OPEN_FOLDER = 'OPEN_FOLDER';
export const BACK_FOLDER = 'BACK_FOLDER';
export const FORWARD_FOLDER = 'FORWARD_FOLDER';
export const UP_FOLDER = 'UP_FOLDER';

export function openFolder(windowId, folder) {
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

export function upFolder(windowId) {
    return {
        type: UP_FOLDER,
        windowId
    }
}