let CURRENT_WINDOW_ID = 0;

//Reducer Helpers

export const updateStateOfOpenProgram = (state, windowId, updateFunc) =>
  state.map(
    openProgram =>
      openProgram.windowId === windowId ? updateFunc(openProgram) : openProgram
  );

export const openProgram = (state, action, expectedProgramId) =>
  action.id === expectedProgramId
    ? [
        ...state,
        {
          id: action.id,
          windowId: CURRENT_WINDOW_ID++,
          isShowing: true,
          isFullscreen: false,
          payload: action.payload,
        },
      ]
    : state;

export const fullscreenProgram = (state, action, expectedProgramId) =>
  action.id === expectedProgramId
    ? updateStateOfOpenProgram(state, action.windowId, openProgram => ({
        ...openProgram,
        isFullscreen: action.isFullscreen,
      }))
    : state;

export const hideProgram = (state, action, expectedProgramId) => {
  const { id, windowId, isShowing } = action;
  if (id === expectedProgramId)
    return updateStateOfOpenProgram(state, windowId, openProgram => ({
      ...openProgram,
      isShowing,
    }));
  return state;
};

export const closeProgram = (state, action, expectedProgramId) =>
  action.id === expectedProgramId
    ? state.filter(openProgram => openProgram.windowId !== action.windowId)
    : state;
