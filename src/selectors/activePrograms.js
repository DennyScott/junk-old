import { createSelector } from 'reselect'
import { NOTEPAD, EXPLORER, PASSWORD_DIALOG } from '../programs';
const getPrograms = (state) => state.programs;
const getActiveProgramObjects = state => state.activePrograms;

console.log(getActivePrograms)
export const getActivePrograms = createSelector(
  [ getPrograms, getActiveProgramObjects ],
  (programs, activePrograms) => 
    activePrograms.map(activeProgram => ({
      ...(programs.find(e => e.id === activeProgram.id)), 
      ...activeProgram
    }))
)

export const getNotepadActivePrograms = createSelector(
  [getActivePrograms],
  activePrograms => activePrograms.filter(e => e.id === NOTEPAD)
)

export const getExplorerActivePrograms = createSelector(
  [getActivePrograms],
  activePrograms => activePrograms.filter(e => e.id === EXPLORER)
)

export const getPasswordDialogPrograms = createSelector(
  [getActivePrograms],
  activePrograms => activePrograms.filter(e => e.id === PASSWORD_DIALOG)
)