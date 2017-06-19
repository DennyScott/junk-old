import React from 'react';
import PropTypes from 'prop-types';
import ProgramWindow from '../../../../../containers/Computer/Desktop/Window/programWindow';
import styled from 'styled-components';

const NotepadText = styled.textarea`
    overflow: auto;
    resize: none;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    border: none;
`

const MainArea = styled.div`
    text-align: left;
    font-family: 'Lucida Sans Regular';
    font-size: 12px;
    height: calc(100% - 50px);
    width: 100%;
`
const notepad = props => (
    <ProgramWindow program={props.program} displayMenu={true}>
        <MainArea>
            <NotepadText defaultValue={props.text} />
        </MainArea>
    </ProgramWindow>
);

notepad.propTypes = {
    text: PropTypes.string
};

export default notepad;
