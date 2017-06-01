import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './icon.css';
import Draggable from 'react-draggable';

const draggableIcon = props => (
      <Draggable handle=".handle">
          <div className="desktop-icon handle">
            <img src={props.img} width="32" height="32" draggable="false"/>
            <div className="app-name-line">
                <span className="app-name">{props.appName}</span>
            </div>
          </div>
        </Draggable>
    );

draggableIcon.propTypes = {
    img: PropTypes.string.isRequired,
    appName: PropTypes.string.isRequired,
}

export default draggableIcon;