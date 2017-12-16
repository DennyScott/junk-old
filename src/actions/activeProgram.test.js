import * as activeProgram from './activeProgram';
import { PASSWORD_DIALOG } from 'programs';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
    var id = "test";
    var windowId = 0;

    var expectedOutcome = {
        type: activeProgram.CLOSE_PROGRAM,
        id,
        windowId
    }

    expect(activeProgram.closeProgram(id, windowId)).toMatchObject(expectedOutcome);
});

it('hideProgram returns a new action', () => {
    var id = "test";
    var windowId = 0;
    var isShowing = true;

    var expectedOutcome = {
        type: activeProgram.HIDE_PROGRAM,
        id,
        windowId,
        isShowing
    }

    expect(activeProgram.hideProgram(id, windowId, isShowing)).toMatchObject(expectedOutcome);
});

it('fullscreenProgram returns a new action', () => {
    var id = "test";
    var windowId = 0;
    var isFullscreen = true;

    var expectedOutcome = {
        type: activeProgram.FULLSCREEN_PROGRAM,
        id,
        windowId,
        isFullscreen
    }

    expect(activeProgram.fullscreenProgram(id, windowId, isFullscreen)).toMatchObject(expectedOutcome);
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