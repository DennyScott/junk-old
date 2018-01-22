import * as activeProgram from './activeProgram';
import { PASSWORD_DIALOG } from 'programs';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const getBasicWindow = (type) => ({
    type,
    id: 'test',
    windowId: 0
})

it('openNewProgram returns a new action', () => {
    var id = "test";
    var payload = "test payload";

    var expectedOutcome = {
        type: activeProgram.OPEN_PROGRAM,
        id,
        payload
    }
    expect(activeProgram.openNewProgram(id, payload)).toMatchObject(expectedOutcome);
});

it('closeProgram returns a new action', () => {
    var expectedOutcome = {
        ...getBasicWindow(activeProgram.CLOSE_PROGRAM),
    }

    expect(activeProgram.closeProgram(expectedOutcome.id, expectedOutcome.windowId)).toMatchObject(expectedOutcome);
});

const createWindowAction = (type, activatedProperty) => {
    var val = {
        ...getBasicWindow(type),
    }
    val[activatedProperty] = true;
    return val;
}

it('hideProgram returns a new action', () => {

    var expectedOutcome = createWindowAction(activeProgram.HIDE_PROGRAM, "isShowing");

    expect(activeProgram.hideProgram(expectedOutcome.id, expectedOutcome.windowId, expectedOutcome.isShowing)).toMatchObject(expectedOutcome);
});

it('fullscreenProgram returns a new action', () => {

    var expectedOutcome = createWindowAction(activeProgram.FULLSCREEN_PROGRAM, "isFullscreen");

    expect(activeProgram.fullscreenProgram(expectedOutcome.id, expectedOutcome.windowId, expectedOutcome.isFullscreen)).toMatchObject(expectedOutcome);
});

it('openProgram with no password returns a new OpenProgram action', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    const file = {
        filetype: "test",
        payload: "testPayload"
    };

    store.dispatch(activeProgram.openProgram(file));
    expect(store.getActions()[0].type).toBe(activeProgram.OPEN_PROGRAM);
});

it('openProgram with a password returns a password dialog action', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    const file = {
        filetype: "test",
        payload: "testPayload",
        password: "anything"
    };

    store.dispatch(activeProgram.openProgram(file));
    expect(store.getActions()[0].id).toBe(PASSWORD_DIALOG);
});