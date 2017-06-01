export const OPEN_PROGRAM = 'OPEN_PROGRAM';
export const CLOSE_PROGRAM = 'CLOSE_PROGRAM';

export function openProgram(id, program) {
    return {
        type: OPEN_PROGRAM,
        id,
        program
    }
}

export function closeProgram(id) {
    return {
        type: CLOSE_PROGRAM,
        id
    }
}