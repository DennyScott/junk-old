import React from 'react';
import PropTypes from 'prop-types';
import './taskbar.css';

const taskbar = props =>(
    <div className="taskbar">
        <div className="start-button" />
        <div className="taskbar-item" />
        <div className="taskbar-item" />
        <div className="taskbar-item" />
        <div className="taskbar-item" />
        <div className="menu-tray pull-right" />
    </div>
);

export default taskbar;