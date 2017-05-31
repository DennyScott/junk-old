import React, { Component } from 'react';
import './windowBar.css';
import FontAwesome from 'react-fontawesome';

export default class WindowBar extends Component {
  render() {
    return(
        <div className="window-bar handle">
            <FontAwesome 
                className="pull-right close-icon"
                name='close-thin'
                onClick={this.props.closeAction}
            />
        </div>
    )
  }
}
