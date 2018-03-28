import {
  OPEN_PROGRAM,
  CLOSE_PROGRAM,
  HIDE_PROGRAM,
  FULLSCREEN_PROGRAM,
  openProgramReducer,
  closeProgramReducer,
  hideProgramReducer,
  fullscreenProgramReducer,
} from 'components/program';
import { NOTEPAD } from 'programs';

export const notepadPrograms = (state = [], action) => {
  switch (action.type) {
    case HIDE_PROGRAM:
      return hideProgramReducer(state, action, NOTEPAD);
    case FULLSCREEN_PROGRAM:
      return fullscreenProgramReducer(state, action, NOTEPAD);
    case OPEN_PROGRAM:
      return openProgramReducer(state, action, NOTEPAD);
    case CLOSE_PROGRAM:
      return closeProgramReducer(state, action, NOTEPAD);
    default:
      return state;
  }
};
