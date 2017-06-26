import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { closeProgram, hideProgram, fullscreenProgram } from 'actions/openProgram';
import WindowBar from 'components/Computer/Desktop/Window/WindowBar/windowBar';
import MenuBar from 'components/Computer/Desktop/Window/MenuBar/menuBar';
import './programWindow.css';

class ProgramWindow extends Component {

  static propTypes = {
    program: PropTypes.object.isRequired,
    displayMenu: PropTypes.bool 
  }

  closeWindow() {
    this.props.closeProgram(this.props.program.windowId);
  }

  minimizeWindow() {
    this.props.hideProgram(this.props.program.windowId, false);
  }

  maximizeWindow() {
    this.props.fullscreenProgram(this.props.program.windowId, !this.props.program.isFullscreen);
  }

  render() {
    return this.props.program.isShowing ? this.defaultWindow() : null;
  }

  defaultWindow() {
    return this.props.program.isFullscreen ? this.regularWindow() : this.draggableWindow();
  }

  regularWindow() {
     return (
      <div className={this.props.program.isFullscreen ? 'fullscreen-window window' : 'regular-window window'}>
        <WindowBar closeAction={() => this.closeWindow()} minimizeAction={() => this.minimizeWindow()} maximizeAction={() => this.maximizeWindow()} isDragable={!this.props.program.isFullscreen}/>
        {this.props.displayMenu ? <MenuBar /> : null}
        {this.props.children}
      </div>
     );
  }

  draggableWindow() {
    return (
      <Draggable handle=".handle">
        {this.regularWindow()}
      </Draggable>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  closeProgram: windowId => dispatch(closeProgram(windowId)),
  hideProgram: (windowId, isShowing) => dispatch(hideProgram(windowId, isShowing)),
  fullscreenProgram: (windowId, isFullscreen) => dispatch(fullscreenProgram(windowId, isFullscreen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramWindow);