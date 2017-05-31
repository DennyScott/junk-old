import React, { Component } from 'react';
import './menuItem.css';
import Draggable from 'react-draggable';

export default class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

  render() {
      return this.state.selected ? this.selectedMenuItem() : this.unselectedMenuItem();
  }

  selectedMenuItem() {
      return(
        <span className="menu-item selected-menu-item">
            <span className="key-letter">{this.props.name.charAt(0)}</span>{this.props.name.substring(1)}
        </span>
    )
  }

  unselectedMenuItem() {
      return(
        <span className="menu-item" onClick={this.clickItem.bind(this)}>
            <span className="key-letter">{this.props.name.charAt(0)}</span>{this.props.name.substring(1)}
        </span>
    )
  }

  clickItem() {
      this.setState({selected: true})
  }
}
