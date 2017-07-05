import { createSelector } from 'reselect'
const getPrograms = (state) => state.programs;
const getNotepadPrograms = state => state.notepadPrograms;
const getExplorerPrograms = state => state.explorerPrograms;
const getPasswordPrograms = state => state.passwordDialogPrograms;

export const getActivePrograms = createSelector(
  [getNotepadPrograms, getExplorerPrograms, getPasswordPrograms],
  mapCombinePrograms
)

export const getDetailedNotepadActivePrograms = createSelector(
  [ getPrograms, getNotepadPrograms ],
  mapDetailedActivePrograms
);

export const getDetailedExplorerActivePrograms = createSelector(
  [ getPrograms, getExplorerPrograms ],
  mapDetailedActivePrograms
);

export const getDetailedPasswordActivePrograms = createSelector(
  [ getPrograms, getPasswordPrograms ],
  mapDetailedActivePrograms
);

export const getDetailedActivePrograms = createSelector(
  [ getDetailedNotepadActivePrograms, getDetailedExplorerActivePrograms, getDetailedPasswordActivePrograms ],
  mapCombinePrograms
)

function mapDetailedActivePrograms (programs, activePrograms) {
  return activePrograms.map(activeProgram => ({
    ...(programs.find(e => e.id === activeProgram.id)), 
    ...activeProgram
  }))
}

function mapCombinePrograms (notepads, explorers, passwords) { 
  return [
    ...notepads,
    ...explorers,
    ...passwords
  ]
}