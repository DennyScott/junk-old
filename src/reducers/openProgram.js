import { OPEN_PROGRAM, CLOSE_PROGRAM, HIDE_PROGRAM, FULLSCREEN_PROGRAM } from '../actions/openProgram';
import { OPEN_FOLDER } from '../actions/drive';


const CURRENT_WINDOW_ID = 0;

export const openPrograms = (state = [], action) => {
    switch(action.type) {
        case OPEN_FOLDER:
        console.log(state);
            return state.map(openProgram =>
                openProgram.windowId === action.windowId ?
                    {
                        ...openProgram, 
                        payload: {
                            location: openProgram.payload.location + '/' + action.folder
                        }
                    } :
                    openProgram
            )
        case OPEN_PROGRAM:
            return [...state, {id: action.id, windowId: CURRENT_WINDOW_ID++, isShowing:true, isFullscreen:false, payload: action.payload}];
        case CLOSE_PROGRAM:
            return state.filter(openProgram =>
                openProgram.id !== action.id || openProgram.windowId !== action.windowId
            );
        case HIDE_PROGRAM:
            return state.map(openProgram => 
                openProgram.windowId === action.windowId 
                    ? { ...openProgram, isShowing: action.isShowing} 
                    : openProgram);
        case FULLSCREEN_PROGRAM:
            return state.map(openProgram => 
                openProgram.windowId === action.windowId 
                    ? { ...openProgram, isFullscreen: action.isFullscreen} 
                    : openProgram);
        default:
            return state;
    }
}