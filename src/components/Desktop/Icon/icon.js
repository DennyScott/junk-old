import React, { Component } from 'react';
import './icon.css';
import Draggable from 'react-draggable';

export default class Icon extends Component {
  render() {
    return (
      <Draggable handle=".handle">
          <div className="desktop-icon handle">
            <img src={this.props.img} width="32" height="32" draggable="false"/>
          </div>
        </Draggable>
    )
  }
}
