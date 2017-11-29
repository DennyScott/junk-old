import React, { Component } from 'react';
import logo from './logo.svg';
import { game } from './phaser/phaser';
import Computer from 'components/computer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Computer />
      </div>
    );
  }
}

export default App;
