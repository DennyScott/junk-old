import React, { Component } from 'react';
import './menuBar.css';
import MenuItem from './MenuItem/menuItem';

export default class MenuBar extends Component {

  render() {
    return(
        <div className="menu-bar">
          <span className="menu-text">
            <MenuItem name="File"/>
            <MenuItem name="Edit"/>
            <MenuItem name="Options"/>
            <MenuItem name="Tools"/>
            <MenuItem name="Help"/>
          </span>
        </div>
    )
  }
}
