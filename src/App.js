import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {game} from './phaser/phaser';
import Window from './components/Window/window';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="phaser"></div>
        <Window />
      </div>
    );
  }
}

export default App;
