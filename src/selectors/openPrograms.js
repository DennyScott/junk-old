import { createSelector } from 'reselect'

const getPrograms = (state) => state.programs;
const getOpenProgramObjects = state => state.openPrograms;

export const getOpenPrograms = createSelector(
  [ getPrograms, getOpenProgramObjects ],
  (programs, openPrograms) => 
    openPrograms.map(openProgram => 
      Object.assign(openProgram, programs.find(e => 
        e.id === openProgram.id)
      )
    )
)