import React from 'react';
import PropTypes from 'prop-types';
import TaskbarItem from './TaskbarItem/taskbar-item';
import MenuTray from './MenuTray/menu-tray';
import styled from 'styled-components';

const StartButton = styled.div`
    width: 100px;
    height: 100%;
    background-color: blue;
    color:white;
`

const MenuButton = styled.div`
    height: 100%;
    width: 200px;
    background-color: lightgrey;
    margin-left: auto;
`

const Taskbar = styled.div`
    background-color: grey;
    width: 100%;
    height:50px;
    position:absolute; 
    bottom:0;
    z-index:2;
    display: flex;
    align-items: flex-end;
`

const taskbar = props => (

    <Taskbar>
        <StartButton>
            Start
        </StartButton>
        {props.openPrograms.map(program => <TaskbarItem key={program.windowId} program={program}/>)}
        <MenuTray />
    </Taskbar>
);

taskbar.PropTypes = {
    openPrograms: PropTypes.array.isRequired,
}

export default taskbar;