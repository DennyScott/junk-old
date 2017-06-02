import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './icon.css';
import Draggable from 'react-draggable';

const draggableIcon = props => (
      <Draggable handle=".handle">
          <div className="desktop-icon handle" onDoubleClick={props.onDoubleClick}>
            <img src={props.program.logo} width="42" height="42" draggable="false"/>
            <div className="app-name-line">
                <span className="app-name">{props.program.name}</span>
            </div>
          </div>
        </Draggable>
    );

draggableIcon.propTypes = {
    program: PropTypes.object.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
}

export default draggableIcon;