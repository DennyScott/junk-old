import { PASSWORD_DIALOG } from 'programs';

//Actions
export const OPEN_PROGRAM = 'OPEN_PROGRAM';
export const CLOSE_PROGRAM = 'CLOSE_PROGRAM';
export const HIDE_PROGRAM = 'HIDE_PROGRAM';
export const FULLSCREEN_PROGRAM = 'FULLSCREEN_PROGRAM';

//Action Creators
export function openNewProgram(id, payload) {
  return {
    type: OPEN_PROGRAM,
    id,
    payload,
  };
}

export function closeProgram(id, windowId) {
  return {
    type: CLOSE_PROGRAM,
    id,
    windowId,
  };
}

export function hideProgram(id, windowId, isShowing) {
  return {
    type: HIDE_PROGRAM,
    id,
    windowId,
    isShowing,
  };
}

export function fullscreenProgram(id, windowId, isFullscreen) {
  return {
    type: FULLSCREEN_PROGRAM,
    id,
    windowId,
    isFullscreen,
  };
}

export function openProgram(file) {
  return dispatch =>
    checkForPassword(file, dispatch, () =>
      dispatch(openNewProgram(file.filetype, file.payload)),
    );
}

export function checkForPassword(itemToCheck, dispatch, successCallback) {
  if (itemToCheck.password) {
    dispatch(
      openNewProgram(PASSWORD_DIALOG, {
        neededPassword: itemToCheck.password,
        inputText: '',
        successCallback,
      }),
    );
  } else {
    successCallback();
  }
}
