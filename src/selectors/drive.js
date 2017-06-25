import { createSelector } from 'reselect'
import { getExplorerOpenPrograms } from './openPrograms';
import { NOTEPAD, EXPLORER } from '../programs';

const getDrive = state => state.drive;
const getUser = state => state.user;

const getLocation = (drive, location) => {
    let currentLocation = drive;
    const locationArray = location.split('/');
    locationArray.forEach(e => currentLocation = currentLocation.contents[e] || currentLocation);
    console.log(currentLocation);
    return currentLocation;
}

export const getExplorerOpenProgramsWithContents = createSelector(
  [ getDrive, getExplorerOpenPrograms ],
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