import React from 'react';
import PropTypes from 'prop-types';
import './taskbarItem.css';

const taskbarItem = props =>(
    <div className="taskbar-item" >
        <span className="program-name">{props.program.name}</span>
    </div>
);

export default taskbarItem;