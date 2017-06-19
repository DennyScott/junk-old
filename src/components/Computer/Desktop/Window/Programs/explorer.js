import React from 'react';
import PropTypes from 'prop-types';
import ProgramWindow from '../../../../../containers/Computer/Desktop/Window/programWindow';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar/navigationBar';

const FolderListingArea = styled.div``

const notepad = props => (
    <ProgramWindow program={props.program} displayMenu={true}>
        <NavigationBar />
        <FolderListingArea >
            FOLDERS APPEAR HERE
        </FolderListingArea>
    </ProgramWindow>
);

notepad.propTypes = {
    text: PropTypes.string
};

export default notepad;
