import React from 'react';
import PropTypes from 'prop-types';

import './taskbar-item.css';

const taskbarItem = props =>(
    <div className="taskbar-item" onClick={() => props.onClick()}>
        {props.name}
    </div>
)

taskbarItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default taskbarItem;