import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import MyComputerLogo from './assets/Computer/Desktop/Icon/my_computer.png';
import NotepadLogo from './assets/Computer/Desktop/Icon/Notepad.png';

const loggerMiddleware = createLogger();

const defaultState = {
    programs: [{
        id: 'Notepad',
        logo: NotepadLogo,
        name: 'Notepad',
    }],
    openPrograms: [],
};

const enhancers = compose(
    applyMiddleware(loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;