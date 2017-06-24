import { TOGGLE_SWITCH, SWITCH_OFF, SWITCH_ON } from '../actions/switch';

export const switches = (state = {}, action) => {
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {...state, [action.switchName]: !state[action.switchName]};
        case SWITCH_OFF:
            return {...state, [action.switchName]: false};
        case SWITCH_ON:
            return {...state, [action.switchName]: true};
        default:
            return state;
    }
}