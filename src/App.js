import React, { Component } from 'react';
import logo from './logo.svg';
import {game} from './phaser/phaser';
import WorkDesk from './components/Desktop/workDesk';
import Taskbar from './components/Desktop/Taskbar/taskbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkDesk />
        <Taskbar />
      </div>
    );
  }
}

export default App;
