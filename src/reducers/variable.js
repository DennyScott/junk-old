import { STORE_VARIABLE } from '../actions/variable';

export const variables = (state = {}, action) => {
    switch(action.type) {
        case STORE_VARIABLE:
            return {...state, [action.variableName]: action.payload};
        default:
            return state;
    }
}