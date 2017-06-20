import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from '../actions/openProgram';
import { OPEN_FOLDER, UP_FOLDER, BACK_FOLDER, FORWARD_FOLDER } from '../actions/drive';


const CURRENT_WINDOW_ID = 0;


const constructNewHistory = openProgram => 
    [...(openProgram.payload.previousLocations.slice(0, openProgram.payload.currentLocationIndex)), openProgram.payload.location]

const updateStateOfOpenProgram = (state, windowId, updateFunc) => {
    return state.map(openProgram => 
        openProgram.windowId === windowId ? updateFunc(openProgram) : openProgram);
}

const changeFolderLocation = (state, windowId, locationFunc, storeHistory = true) => {
    return updateStateOfOpenProgram(state, windowId, openProgram => ({
        ...openProgram, 
        payload: {
            ...(openProgram.payload), 
            previousLocations: storeHistory ? constructNewHistory(openProgram) : openProgram.payload.previousLocations,
            currentLocationIndex: storeHistory ? openProgram.payload.currentLocationIndex + 1 : openProgram.payload.currentLocationIndex,
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
        (folderLocation, openProgram) => openProgram.payload.previousLocations[openProgram.payload.currentLocationIndex] || openProgram.payload.location,
        false
    );
}

export const openPrograms = (state = [], action) => {
    switch(action.type) {
        case OPEN_FOLDER:
            return changeFolderLocation(state, action.windowId, folderLocation => folderLocation + '/' + action.folder);
        case UP_FOLDER:
            return changeFolderLocation(state, action.windowId, folderLocation => folderLocation.substring(0, folderLocation.lastIndexOf('/')));
        case BACK_FOLDER:
            return traverseHistory(state, action.windowId, openProgram => Math.max(openProgram.payload.currentLocationIndex - 1, 0));
        case FORWARD_FOLDER:
            return traverseHistory(state, action.windowId, openProgram => Math.min(openProgram.payload.currentLocationIndex + 1, openProgram.payload.previousLocations.length-1));
        case HIDE_PROGRAM:
            return updateStateOfOpenProgram(state, action.windowId, openProgram => ({ ...openProgram, isShowing: action.isShowing}))
        case FULLSCREEN_PROGRAM:
            return updateStateOfOpenProgram(state, action.windowId, openProgram => ({...openProgram, isFullscreen: action.isFullscreen}));
        case OPEN_PROGRAM:
            return [...state, {id: action.id, windowId: CURRENT_WINDOW_ID++, isShowing:true, isFullscreen:false, payload: action.payload}];
        case CLOSE_PROGRAM:
            return state.filter(openProgram => openProgram.id !== action.id || openProgram.windowId !== action.windowId);
        default:
            return state;
    }
}