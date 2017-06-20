export const OPEN_FOLDER = 'OPEN_FOLDER';

export function openFolder(windowId, folder) {
    return {
        type: OPEN_FOLDER,
        windowId,
        folder
    }
}