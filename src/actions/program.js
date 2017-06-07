export const ADD_PROGRAM = 'ADD_PROGRAM';
export const REMOVE_PROGRAM = 'REMOVE_PROGRAM';

export function addProgram(program) {
    return {
        type: ADD_PROGRAM,
        program
    }
}

export function removeProgram(program) {
    return {
        type: REMOVE_PROGRAM,
        program
    }
}