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
import { UPDATE_PASSWORD_INPUT } from 'components/password-dialog';
import { PASSWORD_DIALOG } from 'programs';

export const passwordDialogPrograms = (state = [], action) => {
  switch (action.type) {
    case HIDE_PROGRAM:
      return hideProgramReducer(state, action, PASSWORD_DIALOG);
    case FULLSCREEN_PROGRAM:
      return fullscreenProgramReducer(state, action, PASSWORD_DIALOG);
    case OPEN_PROGRAM:
      return openProgramReducer(state, action, PASSWORD_DIALOG);
    case CLOSE_PROGRAM:
      return closeProgramReducer(state, action, PASSWORD_DIALOG);
    case UPDATE_PASSWORD_INPUT:
      return updateStateOfOpenProgramReducer(
        state,
        action.windowId,
        openProgram => ({
          ...openProgram,
          payload: { ...openProgram.payload, inputText: action.inputText },
        }),
      );
    default:
      return state;
  }
};
