import { combineReducers } from 'redux';
import { programs } from './program';
import { switches } from './switch';
import { variables } from './variable';
import { drive } from './drive';
import { user } from './user';
import { explorerPrograms } from './explorer';
import { passwordDialogPrograms } from './password-dialog';
import { notepadPrograms } from './notepad';

const rootReducer = combineReducers({
  programs,
  explorerPrograms,
  passwordDialogPrograms,
  notepadPrograms,
  switches,
  variables,
  drive,
  user,
});

export default rootReducer;
