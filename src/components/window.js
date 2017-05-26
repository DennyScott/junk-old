import React, { Component } from 'react';
import './window.css';
import Draggable from 'react-draggable';

export default class Window extends Component {

  render() {

    return(
      <Draggable handle=".handle">
        <div className="window">
          <div className="window-bar handle">
            window bar
          </div>
          <div className="menu-bar">
            Menu
          </div>
          Window
        </div>
      </Draggable>
    )
  }
}
