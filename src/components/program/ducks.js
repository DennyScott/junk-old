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

let CURRENT_WINDOW_ID = 0;

//Reducer Helpers

export const updateStateOfOpenProgramReducer = (state, windowId, updateFunc) =>
  state.map(
    openProgram =>
      openProgram.windowId === windowId ? updateFunc(openProgram) : openProgram,
  );

export const openProgramReducer = (state, action, expectedProgramId) =>
  action.id === expectedProgramId
    ? [
        ...state,
        {
          id: action.id,
          windowId: CURRENT_WINDOW_ID++,
          isShowing: true,
          isFullscreen: false,
          payload: action.payload,
        },
      ]
    : state;

export const fullscreenProgramReducer = (state, action, expectedProgramId) =>
  action.id === expectedProgramId
    ? updateStateOfOpenProgramReducer(state, action.windowId, openProgram => ({
        ...openProgram,
        isFullscreen: action.isFullscreen,
      }))
    : state;

export const hideProgramReducer = (state, action, expectedProgramId) => {
  const { id, windowId, isShowing } = action;
  if (id === expectedProgramId)
    return updateStateOfOpenProgramReducer(state, windowId, openProgram => ({
      ...openProgram,
      isShowing,
    }));
  return state;
};

export const closeProgramReducer = (state, action, expectedProgramId) =>
  action.id === expectedProgramId
    ? state.filter(openProgram => openProgram.windowId !== action.windowId)
    : state;
