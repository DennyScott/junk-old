import React, { Component } from 'react';
import './window.css';
import WindowBar from './WindowBar/windowBar';
import MenuBar from './MenuBar/menuBar';
import MainArea from './MainArea/mainArea';
import Draggable from 'react-draggable';

export default class Window extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showWindow: true,
    };
  }

  closeWindow() {
    this.setState({showWindow: false});
  }

  render() {
    return this.state.showWindow ? this.defaultWindow() : null;
  }

  defaultWindow() {
    return (
      <Draggable handle=".handle">
          <div className="window">
            <WindowBar closeAction={this.closeWindow.bind(this)}/>
            <MenuBar />
            <MainArea />
          </div>
        </Draggable>
    )
  }
}
