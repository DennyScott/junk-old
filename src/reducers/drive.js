import { OPEN_FOLDER } from '../actions/drive';


export const drive = (state = {}, action) => {
    switch(action.type) {
        case OPEN_FOLDER:
            return state;
        default:
            return state;
    }
}