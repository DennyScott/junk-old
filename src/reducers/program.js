import { OPEN_PROGRAM, CLOSE_PROGRAM } from '../actions/program';

export const programs = (state = {}, action) => {
    switch(action.type) {
        case OPEN_PROGRAM:
            return {...state, [action.id]: action.program};
        case CLOSE_PROGRAM:
            return state.filter(e => e.id !== action.program.id);
        default:
            return state;
    }
}