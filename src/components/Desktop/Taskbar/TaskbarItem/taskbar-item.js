import React from 'react';
import PropTypes from 'prop-types';
import './taskbar-item.css';

const taskbarItem = props =>(
    <div className="taskbar-item">
        {props.program.name}
    </div>
);

taskbarItem.PropTypes = {
    program: PropTypes.object.isRequired,
}

export default taskbarItem;