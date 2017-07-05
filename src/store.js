import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import myComputerIcon from 'components/desktop/assets/icons/my_computer.png';
import notepadIcon from 'components/desktop/assets/icons/notepad.png';
import { NOTEPAD, EXPLORER, PASSWORD_DIALOG } from './programs';

const loggerMiddleware = createLogger();
const FOLDER = "FOLDER";

const defaultState = {
    programs: [{
        id: NOTEPAD,
        logo: notepadIcon,
        name: 'Notepad',
        payload: {
            text: "",
        }
    },
    {
        id: EXPLORER,
        logo: myComputerIcon,
        name: 'My Computer',
        payload: {
            location: "",
            previousLocations: [""],
            currentLocationIndex: 0,
        }
    },
    {
        id: PASSWORD_DIALOG,
        name: 'Password',
        payload: {
            needPassword: '',
            successCallback: () => {},
            inputText: '',
        }
    }],
    activePrograms: [],
    switches: {},
    variables: {},
    user: 'Joel',
    drive: {
        filetype: FOLDER,
        contents: {
            'C:': {
                filetype: FOLDER,
                contents: {
                    Users: {
                        filetype: FOLDER,
                        contents: {
                            Joel: {
                                filetype: FOLDER,
                                contents: {
                                    Desktop: {
                                        filetype: FOLDER,
                                        contents: {
                                            "My Computer": {
                                                filetype: EXPLORER,
                                                logo: myComputerIcon,
                                                payload: {
                                                    location: "C:",
                                                    previousLocations: ["C:"],
                                                    currentLocationIndex: 0,
                                                }
                                            },
                                            myTxtFile : {
                                                filetype: NOTEPAD,
                                                logo: notepadIcon,
                                                payload: {
                                                    text: "I spent the last few days figuring out the password to Joel's Facebook account.  It's RonHextall27.  I've never seen someone actually give so much of a shit about some random hockey goalie to use it for a password, but hey, at least I have access to his account now!",
                                                }
                                            }
                                        },
                                    },
                                    Documents: {
                                        filetype: FOLDER,
                                        contents: {
                                            someRandomFolder: {
                                                filetype: FOLDER,
                                                password: 'RonHextall27',
                                                contents: {
                                                    youMadeItIn: {
                                                        filetype: FOLDER,
                                                        contents: {},
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    Downloads: {
                                        filetype: FOLDER,
                                        contents: {
                                            someOtherRandomFolder: {
                                                filetype: FOLDER,
                                                contents: {},
                                            }
                                        }
                                    }
                                }
                            },
                            Ethan: {
                                filetype: FOLDER,
                                contents: {
                                    Documents: {
                                        filetype: FOLDER,
                                        contents: {
                                            hello: {
                                                filetype: FOLDER,
                                                contents: {},
                                            }
                                        }
                                    },
                                    Downloads: {
                                        filetype: FOLDER,
                                        contents: {
                                            goodbye: {
                                                filetype: FOLDER,
                                                contents: {},
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
    applyMiddleware(thunk, loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;