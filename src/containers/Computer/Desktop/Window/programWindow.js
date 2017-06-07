import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { closeProgram, hideProgram, fullscreenProgram } from '../../../../actions/openProgram';
import WindowBar from '../../../../components/Computer/Desktop/Window/WindowBar/windowBar';
import MenuBar from '../../../../components/Computer/Desktop/Window/MenuBar/menuBar';
import MainArea from '../../../../components/Computer/Desktop/Window/MainArea/mainArea';
import './programWindow.css';

class ProgramWindow extends Component {

  static propTypes = {
    program: PropTypes.object.isRequired, 
  }

  closeWindow() {
    this.props.closeProgram(this.props.program.id, this.props.program.windowId);
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
        <MenuBar />
        <MainArea text="I spent the last few days figuring out the password to Joel's Facebook account.  It's RonHextall27.  I've never seen someone actually give so much of a shit about some random hockey goalie to use it for a password, but hey, at least I have access to his account now!"/>
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
  closeProgram: (programId, windowId) => dispatch(closeProgram(programId, windowId)),
  hideProgram: windowId => dispatch(hideProgram(windowId)),
  fullscreenProgram: (windowId, isFullscreen) => dispatch(fullscreenProgram(windowId, isFullscreen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramWindow);