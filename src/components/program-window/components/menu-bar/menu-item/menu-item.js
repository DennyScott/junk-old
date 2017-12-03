import React, { Component } from 'react';
import './menu-item.css';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    //TODO: Add Proptypes

    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <span
        className={`menu item ${this.state.selected && 'selected-menu-item'}`}
        onClick={() => this.setState({ selected: true })}
      >
        <span className="key-letter">{this.props.name.charAt(0)}</span>
        {this.props.name.substring(1)}
      </span>
    );
  }
}
