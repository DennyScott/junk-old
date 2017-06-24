export const STORE_VARIABLE = 'STORE_VARIABLE';

export function storeVariable(variableName, payload) {
    return {
        type: STORE_VARIABLE,
        variableName,
        payload
    }
}