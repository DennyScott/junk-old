import {
  OPEN_PROGRAM,
  CLOSE_PROGRAM,
  HIDE_PROGRAM,
  FULLSCREEN_PROGRAM,
} from 'actions/activeProgram';
import { UPDATE_PASSWORD_INPUT } from 'actions/password-dialog';
import {
  openProgram,
  closeProgram,
  hideProgram,
  fullscreenProgram,
  updateStateOfOpenProgram,
} from 'reducers/activeProgram';
import { PASSWORD_DIALOG } from 'programs';

export const passwordDialogPrograms = (state = [], action) => {
  switch (action.type) {
    case HIDE_PROGRAM:
      return hideProgram(state, action, PASSWORD_DIALOG);
    case FULLSCREEN_PROGRAM:
      return fullscreenProgram(state, action, PASSWORD_DIALOG);
    case OPEN_PROGRAM:
      return openProgram(state, action, PASSWORD_DIALOG);
    case CLOSE_PROGRAM:
      return closeProgram(state, action, PASSWORD_DIALOG);
    case UPDATE_PASSWORD_INPUT:
      return updateStateOfOpenProgram(state, action.windowId, openProgram => ({
        ...openProgram,
        payload: { ...openProgram.payload, inputText: action.inputText },
      }));
    default:
      return state;
  }
};
