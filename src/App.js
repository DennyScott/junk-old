import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {game} from './phaser/phaser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="phaser"></div>
      </div>
    );
  }
}

export default App;
