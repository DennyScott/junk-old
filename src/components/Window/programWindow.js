import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeProgram } from '../../actions/openProgram';
import WindowBar from './WindowBar/windowBar';
import MenuBar from './MenuBar/menuBar';
import MainArea from './MainArea/mainArea';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import './programWindow.css';

class ProgramWindow extends Component {
  constructor(props) {
    super(props);
    this.state.fullscreen = props.isFullscreen ? true : false;
  }
  
  state = {
    showWindow: true,
  }

  static propTypes = {
    isFullscreen: PropTypes.bool,
    program: PropTypes.object.isRequired, 
  }

  closeWindow() {
    this.props.closeProgram(this.props.program.id, this.props.program.windowId);
  }

  minimizeWindow() {
    this.setState({showWindow: false});
  }

  maximizeWindow() {
    this.setState({fullscreen: !this.state.fullscreen});
  }

  render() {
    return this.state.showWindow ? this.defaultWindow() : null;
  }

  defaultWindow() {
    return this.state.fullscreen ? this.regularWindow() : this.draggableWindow();
  }

  regularWindow() {
     return (
      <div className={this.state.fullscreen ? 'fullscreen-window window' : 'regular-window window'}>
        <WindowBar closeAction={() => this.closeWindow()} minimizeAction={() => this.minimizeWindow()} maximizeAction={() => this.maximizeWindow()} isDragable={!this.state.fullscreen}/>
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
  closeProgram: (programId, windowId) => dispatch(closeProgram(programId, windowId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramWindow);