import React, { Component } from 'react';
import logo from './logo.svg';
import {game} from './phaser/phaser';
import Desktop from './components/Desktop/desktop';
import Taskbar from './components/Desktop/Taskbar/taskbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Desktop />
        <Taskbar />
      </div>
    );
  }
}

export default App;
