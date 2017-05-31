import React, { Component } from 'react';
import WindowBar from './WindowBar/windowBar';
import MenuBar from './MenuBar/menuBar';
import MainArea from './MainArea/mainArea';
import Draggable from 'react-draggable';
import './window.css';

export default class Window extends Component {

  static state = {
    showWindow: true,
    fullScreen: false,
  }

  closeWindow() {
    this.setState({showWindow: false});
  }

  minimizeWindow() {

  }

  maximizeWindow() {
    this.setState({fullScreen: true})
  }

  render() {
    return this.state.showWindow ? this.defaultWindow() : null;
  }

  defaultWindow() {
    return (
      <Draggable handle=".handle">
          <div className={this.state.isFullscreen ? 'fullscreen-window' : 'regular-window window'}>
            <WindowBar closeAction={() => this.closeWindow()} minimizeAction={() => this.minimizeWindow()} maximizeAction={() => this.maximizeWindow()} isDragable={!this.state.isFullscreen}/>
            <MenuBar text="I spent the last few days figuring out the password to Joel's Facebook account.  It's RonHextall27.  I've never seen someone actually give so much of a shit about some random hockey goalie to use it for a password, but hey, at least I have access to his account now!"/>
            <MainArea />
          </div>
        </Draggable>
    )
  }
}
