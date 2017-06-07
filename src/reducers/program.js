import { ADD_PROGRAM, REMOVE_PROGRAM } from '../actions/program';

export const programs = (state = {}, action) => {
    switch(action.type) {
        case ADD_PROGRAM:
            return [...state, action.program];
        case REMOVE_PROGRAM:
            return state.filter(e => e.id !== action.program.id);
        default:
            return state;
    }
}