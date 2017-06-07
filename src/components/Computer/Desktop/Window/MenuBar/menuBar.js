import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem/menuItem';
import './menuBar.css';

const menuBar = props =>(
    <div className="menu-bar">
        <span className="menu-text">
        <MenuItem name="File"/>
        <MenuItem name="Edit"/>
        <MenuItem name="Options"/>
        <MenuItem name="Tools"/>
        <MenuItem name="Help"/>
        </span>
    </div>
);

export default menuBar;