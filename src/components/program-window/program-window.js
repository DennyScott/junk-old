import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import WindowBar from './components/window-bar/window-bar';
import MenuBar from './components/menu-bar/menu-bar';
import { closeProgram, hideProgram, fullscreenProgram } from 'actions/activeProgram';
import './program-window.css';

class ProgramWindow extends Component {

  static propTypes = {
    program: PropTypes.object.isRequired,
    displayMenu: PropTypes.bool 
  }

  closeWindow() {
    this.props.closeProgram(this.props.program.id, this.props.program.windowId);
  }

  minimizeWindow() {
    this.props.hideProgram(this.props.program.id, this.props.program.windowId, false);
  }

  maximizeWindow() {
    this.props.fullscreenProgram(this.props.program.id, this.props.program.windowId, !this.props.program.isFullscreen);
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
  closeProgram: (id, windowId) => dispatch(closeProgram(id, windowId)),
  hideProgram: (id, windowId, isShowing) => dispatch(hideProgram(id, windowId, isShowing)),
  fullscreenProgram: (id, windowId, isFullscreen) => dispatch(fullscreenProgram(id, windowId, isFullscreen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramWindow);