export const OPEN_PROGRAM = 'OPEN_PROGRAM';
export const CLOSE_PROGRAM = 'CLOSE_PROGRAM';

const currentWindowId = 0;

export function openProgram(id) {
    return {
        type: OPEN_PROGRAM,
        id,
        windowId: currentWindowId++,
    }
}

export function closeProgram(id, windowId) {
    return {
        type: CLOSE_PROGRAM,
        id,
        windowId
    }
}