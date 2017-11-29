import store from 'store';
import { PASSWORD_DIALOG } from 'programs';
import { checkForPassword } from './activeProgram';
//Actions
export const OPEN_FOLDER = 'OPEN_FOLDER';
export const BACK_FOLDER = 'BACK_FOLDER';
export const FORWARD_FOLDER = 'FORWARD_FOLDER';
export const UP_FOLDER = 'UP_FOLDER';

//Action Creators
export function openNewFolder(windowId, folder) {
  return {
    type: OPEN_FOLDER,
    windowId,
    folder,
  };
}

export function backFolder(windowId) {
  return {
    type: BACK_FOLDER,
    windowId,
  };
}

export function forwardFolder(windowId) {
  return {
    type: FORWARD_FOLDER,
    windowId,
  };
}

function navtigateUpFolder(windowId) {
  return {
    type: UP_FOLDER,
    windowId,
  };
}

export function upFolder(windowId) {
  return dispatch =>
    store
      .getState()
      .explorerPrograms.forEach(
        program =>
          program.windowId === windowId &&
          program.payload.location.length > 0 &&
          dispatch(navtigateUpFolder(windowId))
      );
}

export function openFolder(windowId, folderName, folder) {
  return dispatch =>
    checkForPassword(folder, dispatch, () =>
      dispatch(openNewFolder(windowId, folderName))
    );
}
