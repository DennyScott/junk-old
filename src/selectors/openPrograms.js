import { createSelector } from 'reselect'
import { NOTEPAD, EXPLORER } from '../programs';
const getPrograms = (state) => state.programs;
const getOpenProgramObjects = state => state.openPrograms;

export const getOpenPrograms = createSelector(
  [ getPrograms, getOpenProgramObjects ],
  (programs, openPrograms) => 
    openPrograms.map(openProgram => ({
      ...(programs.find(e => e.id === openProgram.id)), 
      ...openProgram
    }))
)

export const getNotepadOpenPrograms = createSelector(
  [getOpenPrograms],
  openPrograms => openPrograms.filter(e => e.id === NOTEPAD)
)

export const getExplorerOpenPrograms = createSelector(
  [getOpenPrograms],
  openPrograms => openPrograms.filter(e => e.id === EXPLORER)
)