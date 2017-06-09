import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import MyComputerLogo from './components/Desktop/my_computer.png';

const loggerMiddleware = createLogger();

const defaultState = {
    programs: [{
        id: 'My_Computer',
        logo: MyComputerLogo,
        name: 'My Computer',
        isShowing: true,
    }],
    openPrograms: [],
};

const enhancers = compose(
    applyMiddleware(loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;