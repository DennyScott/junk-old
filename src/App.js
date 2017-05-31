import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {game} from './phaser/phaser';
import Desktop from './components/Desktop/desktop';
import Taskbar from './components/Desktop/Taskbar/taskbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="phaser"></div>
        <Desktop />
        <Taskbar />
      </div>
    );
  }
}

export default App;
