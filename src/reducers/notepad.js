import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from 'actions/activeProgram';
import { openProgram, closeProgram, hideProgram, fullscreenProgram } from 'reducers/activeProgram';
import { NOTEPAD } from 'programs';

export const notepadPrograms = (state = [], action) => {
    switch(action.type) {
        case HIDE_PROGRAM:
            return hideProgram(state, action, NOTEPAD);
        case FULLSCREEN_PROGRAM:
            return fullscreenProgram(state, action, NOTEPAD);
        case OPEN_PROGRAM:
            return openProgram(state, action, NOTEPAD);
        case CLOSE_PROGRAM:
            return closeProgram(state, action, NOTEPAD);
        default:
            return state;
    }
}