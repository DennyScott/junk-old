import React from 'react';
import PropTypes from 'prop-types';
import TaskbarItem from './TaskbarItem/taskbar-item';
import './taskbar.css';

const taskbar = props =>(
    <div className="taskbar">
        <div className="start-button" />

        {props.openPrograms.map(program => <TaskbarItem key={program.windowId} program={program}/>)}

        <div className="menu-tray pull-right" />
    </div>
);

taskbar.PropTypes = {
    openPrograms: PropTypes.array.isRequired,
}

export default taskbar;