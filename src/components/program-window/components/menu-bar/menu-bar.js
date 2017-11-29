import React from 'react';
import MenuItem from './menu-item/menu-item';
import './menu-bar.css';

const menuBar = props => (
  <div className="menu-bar">
    <span className="menu-text">
      <MenuItem name="File" />
      <MenuItem name="Edit" />
      <MenuItem name="Options" />
      <MenuItem name="Tools" />
      <MenuItem name="Help" />
    </span>
  </div>
);

export default menuBar;
