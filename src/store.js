import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import MyComputerLogo from './assets/Computer/Desktop/Icon/my_computer.png';
import NotepadLogo from './assets/Computer/Desktop/Icon/notepad.png';
import { NOTEPAD, EXPLORER } from './programs';

const loggerMiddleware = createLogger();

const defaultState = {
    programs: [{
        id: NOTEPAD,
        logo: NotepadLogo,
        name: 'Notepad',
        payload: {
            text: "I spent the last few days figuring out the password to Joel's Facebook account.  It's RonHextall27.  I've never seen someone actually give so much of a shit about some random hockey goalie to use it for a password, but hey, at least I have access to his account now!"
        }
    },
    {
        id: EXPLORER,
        logo: MyComputerLogo,
        name: 'My Computer',
        payload: {
            location: "C:",
            previousLocations: ["C:"],
            currentLocationIndex: 0,
        }
    }],
    openPrograms: [],
    switches: {},
    variables: {},
    user: 'Ethan',
    drive: {
        'C:': {
            contents: {
                Users: {
                    contents: {
                        Joel: {
                            contents: {
                                Desktop: {
                                    contents: {
                                        "My Computer": {
                                            logo: MyComputerLogo
                                        },
                                        myTxtFile : {
                                            filetype: 'Notepad',
                                            logo: NotepadLogo
                                        }
                                    },
                                },
                                Documents: {
                                    contents: {
                                        someRandomFolder: {
                                            contents: {
                                                youMadeItIn: {
                                                    password: 'hello'
                                                }
                                            }
                                        }
                                    }
                                },
                                Downloads: {
                                    contents: {
                                        someOtherRandomFolder: {}
                                    }
                                }
                            }
                        },
                        Ethan: {
                            contents: {
                                Documents: {
                                    contents: {
                                        hello: {}
                                    }
                                },
                                Downloads: {
                                    contents: {
                                        goodbye: {}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
};

const enhancers = compose(
    applyMiddleware(loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers, applyMiddleware(thunk));

export default store;