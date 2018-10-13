import {
  OPEN_FOLDER,
  UP_FOLDER,
  BACK_FOLDER,
  FORWARD_FOLDER,
} from 'actions/explorer';
import {
  OPEN_PROGRAM,
  CLOSE_PROGRAM,
  HIDE_PROGRAM,
  FULLSCREEN_PROGRAM,
  openProgramReducer,
  closeProgramReducer,
  hideProgramReducer,
  fullscreenProgramReducer,
  updateStateOfOpenProgramReducer,
} from 'components/program';
import { EXPLORER } from 'programs';

const constructNewHistory = (openProgram, location) => [
  ...openProgram.payload.previousLocations.slice(
    0,
    openProgram.payload.currentLocationIndex + 1,
  ),
  location,
];

const changeFolderLocation = (
  state,
  windowId,
  locationFunc,
  storeHistory = true,
) => {
  return updateStateOfOpenProgramReducer(state, windowId, openProgram => ({
    ...openProgram,
    payload: {
      ...openProgram.payload,
      currentLocationIndex: storeHistory
        ? openProgram.payload.currentLocationIndex + 1
        : openProgram.payload.currentLocationIndex,
      previousLocations: storeHistory
        ? constructNewHistory(
            openProgram,
            locationFunc(openProgram.payload.location, openProgram),
          )
        : openProgram.payload.previousLocations,
      location: locationFunc(openProgram.payload.location, openProgram),
    },
  }));
};

const updateCurrentHistoryIndex = (state, windowId, indexUpdateFunc) => {
  return updateStateOfOpenProgramReducer(state, windowId, openProgram => ({
    ...openProgram,
    payload: {
      ...openProgram.payload,
      currentLocationIndex: indexUpdateFunc(openProgram),
    },
  }));
};

const traverseHistory = (state, windowId, indexUpdateFunc) => {
  return changeFolderLocation(
    updateCurrentHistoryIndex(state, windowId, indexUpdateFunc),
    windowId,
    (folderLocation, openProgram) =>
      openProgram.payload.previousLocations[
        openProgram.payload.currentLocationIndex
      ],
    false,
  );
};

const openFolder = (state, action) => {
  return changeFolderLocation(
    state,
    action.windowId,
    folderLocation =>
      folderLocation.length > 0
        ? `${folderLocation}/${action.folder}`
        : `${action.folder}`,
  );
};

const upFolder = (state, action) => {
  return changeFolderLocation(state, action.windowId, folderLocation =>
    folderLocation.substring(
      0,
      folderLocation.includes('/') ? folderLocation.lastIndexOf('/') : 0,
    ),
  );
};

const backFolder = (state, action) => {
  return traverseHistory(state, action.windowId, openProgram =>
    Math.max(openProgram.payload.currentLocationIndex - 1, 0),
  );
};

const forwardFolder = (state, action) => {
  return traverseHistory(state, action.windowId, openProgram =>
    Math.min(
      openProgram.payload.currentLocationIndex + 1,
      openProgram.payload.previousLocations.length - 1,
    ),
  );
};

export const explorerPrograms = (state = [], action) => {
  switch (action.type) {
    case HIDE_PROGRAM:
      return hideProgramReducer(state, action, EXPLORER);
    case FULLSCREEN_PROGRAM:
      return fullscreenProgramReducer(state, action, EXPLORER);
    case OPEN_PROGRAM:
      return openProgramReducer(state, action, EXPLORER);
    case CLOSE_PROGRAM:
      return closeProgramReducer(state, action, EXPLORER);
    case OPEN_FOLDER:
      return openFolder(state, action);
    case UP_FOLDER:
      return upFolder(state, action);
    case BACK_FOLDER:
      return backFolder(state, action);
    case FORWARD_FOLDER:
      return forwardFolder(state, action);
    default:
      return state;
  }
};
