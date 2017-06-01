import React, { Component } from 'react';
import WindowBar from './WindowBar/windowBar';
import MenuBar from './MenuBar/menuBar';
import MainArea from './MainArea/mainArea';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import './window.css';

export default class Window extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showWindow: true,
      fullscreen: props.isFullscreen || false,
    }
  }

  static propTypes = {
    isFullscreen: PropTypes.bool,
  }

  closeWindow() {
    this.setState({showWindow: false});
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
