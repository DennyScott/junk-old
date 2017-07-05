import { createSelector } from 'reselect'
import { getExplorerActivePrograms } from './activePrograms';
import { NOTEPAD, EXPLORER } from 'programs';

const getDrive = state => state.drive;
const getUser = state => state.user;

const getLocation = (drive, location) => {
    let currentLocation = drive;
    const locationArray = location.split('/');
    locationArray.forEach(e => currentLocation = currentLocation.contents[e] || currentLocation);
    return currentLocation;
}

export const getExplorerActiveProgramsWithContents = createSelector(
  [ getDrive, getExplorerActivePrograms ],
  (drive, explorers) => 
    explorers.map(explorer => ({
        ...explorer,
        currentDirectory: getLocation(drive, explorer.payload.location).contents
    }))
);

export const getDesktopContents = createSelector(
    [ getDrive, getUser ],
    (drive, user) => getLocation(drive, `C:/Users/${user}/Desktop`).contents
);