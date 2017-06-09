import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const DesktopIcon = styled.div`
    cursor: pointer;
    display: inline-block;
`

const AppName = styled.div`
    font-size: 12px;
    color: white;
    font-weight: bolder;
`

const draggableIcon = props => (
      <Draggable handle=".handle">
          <DesktopIcon className="desktop-icon handle" onDoubleClick={props.onDoubleClick}>
            <img src={props.program.logo} width="42" height="42" draggable="false"/>
            <AppName>
                <span className="app-name">{props.program.name}</span>
            </AppName>
          </DesktopIcon>
        </Draggable>
    );

draggableIcon.propTypes = {
    program: PropTypes.object.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
}

export default draggableIcon;