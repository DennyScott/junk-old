import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {game} from './phaser/phaser';
import Window from './components/window';
import Icon from './components/Desktop/Icon/icon';
import MyComputerLogo from './my_computer.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="phaser"></div>
        <Window />
        <Icon img={MyComputerLogo} />
      </div>
    );
  }
}

export default App;
