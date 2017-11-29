//Actions
export const UPDATE_PASSWORD_INPUT = 'UPDATE_PASSWORD_INPUT';

//Action Creators
export function updatePasswordInput(windowId, inputText) {
  return {
    type: UPDATE_PASSWORD_INPUT,
    windowId,
    inputText,
  };
}
