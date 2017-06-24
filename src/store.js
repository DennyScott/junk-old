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
            text: "Empty"
        }
    },
    {
        id: EXPLORER,
        logo: MyComputerLogo,
        name: 'My Computer',
    }],
    openPrograms: [],
    switches: {},
    variables: {},
    user: 'Joel',
    drive: {
        filetype: EXPLORER,
        contents: {
            'C:': {
                filetype: EXPLORER,
                contents: {
                    Users: {
                        filetype: EXPLORER,
                        contents: {
                            Joel: {
                                filetype: EXPLORER,
                                contents: {
                                    Desktop: {
                                        filetype: EXPLORER,
                                        contents: {
                                            "My Computer": {
                                                filetype: EXPLORER,
                                                logo: MyComputerLogo,
                                                payload: {
                                                    location: "C:",
                                                    previousLocations: ["C:"],
                                                    currentLocationIndex: 0,
                                                }
                                            },
                                            myTxtFile : {
                                                filetype: NOTEPAD,
                                                logo: NotepadLogo,
                                                payload: {
                                                    text: "I spent the last few days figuring out the password to Joel's Facebook account.  It's RonHextall27.  I've never seen someone actually give so much of a shit about some random hockey goalie to use it for a password, but hey, at least I have access to his account now!",
                                                }
                                            }
                                        },
                                    },
                                    Documents: {
                                        filetype: EXPLORER,
                                        contents: {
                                            someRandomFolder: {
                                                filetype: EXPLORER,
                                                contents: {
                                                    youMadeItIn: {
                                                        filetype: EXPLORER,
                                                        password: 'hello'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Downloads: {
                                        filetype: EXPLORER,
                                        contents: {
                                            someOtherRandomFolder: {
                                                filetype: EXPLORER,
                                            }
                                        }
                                    }
                                }
                            },
                            Ethan: {
                                filetype: EXPLORER,
                                contents: {
                                    Documents: {
                                        filetype: EXPLORER,
                                        contents: {
                                            hello: {
                                                filetype: EXPLORER,
                                            }
                                        }
                                    },
                                    Downloads: {
                                        filetype: EXPLORER,
                                        contents: {
                                            goodbye: {
                                                filetype: EXPLORER,
                                            }
                                        }
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