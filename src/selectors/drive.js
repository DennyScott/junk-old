import { createSelector } from 'reselect'
import { getExplorerOpenPrograms } from './openPrograms';
import { NOTEPAD, EXPLORER } from '../programs';

const getDrive = state => state.drive;

const getLocation = (drive, location) => {
        let currentLocation = drive;
        const locationArray = location.split('/');
        locationArray.forEach(e => currentLocation = currentLocation.folders[e]);
        return currentLocation;
}
export const getOpenPrograms = createSelector(
  [ getDrive, getExplorerOpenPrograms ],
  (drive, explorers) => 
    explorers.map(explorer => 
     ({
        ...explorer,
        currentDirectory: getLocation(drive, explorer.payload.location).folders
      }))
)