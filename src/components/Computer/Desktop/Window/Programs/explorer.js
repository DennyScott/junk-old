import React from 'react';
import PropTypes from 'prop-types';
import ProgramWindow from '../../../../../containers/Computer/Desktop/Window/programWindow';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar/navigationBar';
import FolderNavigator from '../../../../../containers/Computer/Desktop/Window/folderNavigator';

const explorer = props => (
    <ProgramWindow program={props.program} displayMenu={true}>
        <NavigationBar />
        <FolderNavigator id={props.program.windowId} location={props.program.payload.location}/>
    </ProgramWindow>
);

explorer.propTypes = {
    program: PropTypes.object.isRequired,
};

export default explorer;
