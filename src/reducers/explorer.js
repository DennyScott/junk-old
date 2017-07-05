import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from 'actions/activeProgram';
import { OPEN_FOLDER, UP_FOLDER, BACK_FOLDER, FORWARD_FOLDER } from 'actions/explorer';
import { openProgram, closeProgram, hideProgram, fullscreenProgram, updateStateOfOpenProgram } from 'reducers/activeProgram';
import { EXPLORER } from 'programs';

const constructNewHistory = (openProgram, location) => 
    [...(openProgram.payload.previousLocations.slice(0, openProgram.payload.currentLocationIndex + 1)), location]

const changeFolderLocation = (state, windowId, locationFunc, storeHistory = true) => {
    return updateStateOfOpenProgram(state, windowId, openProgram => ({
        ...openProgram, 
        payload: {
            ...(openProgram.payload), 
            currentLocationIndex: storeHistory ? openProgram.payload.currentLocationIndex + 1 : openProgram.payload.currentLocationIndex,
            previousLocations: storeHistory ? constructNewHistory(openProgram, locationFunc(openProgram.payload.location, openProgram)) : openProgram.payload.previousLocations,
            location: locationFunc(openProgram.payload.location, openProgram) 
        } 
    }));
}

const updateCurrentHistoryIndex = (state, windowId, indexUpdateFunc) => {
    return updateStateOfOpenProgram(state, windowId, openProgram => ({ 
        ...openProgram, 
        payload: {
            ...openProgram.payload, 
            currentLocationIndex: indexUpdateFunc(openProgram)
        }
    }))
}

const traverseHistory =  (state, windowId, indexUpdateFunc) => {
    return changeFolderLocation(
        updateCurrentHistoryIndex(state, windowId, indexUpdateFunc),
        windowId,
        (folderLocation, openProgram) => openProgram.payload.previousLocations[openProgram.payload.currentLocationIndex],
        false
    );
}

export const explorerPrograms = (state = [], action) => {
    switch(action.type) {
        case HIDE_PROGRAM:
            return hideProgram(state, action, EXPLORER);
        case FULLSCREEN_PROGRAM:
            return fullscreenProgram(state, action, EXPLORER);
        case OPEN_PROGRAM:
            return openProgram(state, action, EXPLORER);
        case CLOSE_PROGRAM:
            return closeProgram(state, action, EXPLORER);
        case OPEN_FOLDER:
            return changeFolderLocation(state, action.windowId, folderLocation => folderLocation.length > 0 ? `${folderLocation}/${action.folder}` : `${action.folder}`);
        case UP_FOLDER:
            return changeFolderLocation(state, action.windowId, folderLocation => 
                folderLocation.substring(0, (folderLocation.includes('/') ? folderLocation.lastIndexOf('/') : 0)));
        case BACK_FOLDER:
            return traverseHistory(state, action.windowId, openProgram => Math.max(openProgram.payload.currentLocationIndex - 1, 0));
        case FORWARD_FOLDER:
            return traverseHistory(state, action.windowId, openProgram => Math.min(openProgram.payload.currentLocationIndex + 1, openProgram.payload.previousLocations.length-1));
        default:
            return state;
    }
}