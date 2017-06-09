import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideProgram } from '../../../../actions/openProgram';

import './taskbar-item.css';

class TaskbarItem extends Component {
    render() {
        return (<div className="taskbar-item" onClick={() => this.toggleMin()}>
            {this.props.program.name}
        </div>)
    }

    static propTypes = {
        program: PropTypes.object,
  }

    toggleMin() {
        this.props.hideProgram(this.props.program.windowId, !this.props.program.isShowing);
    }
}

const mapDispatchToProps = dispatch => ({
  hideProgram: (windowId, isShowing) => dispatch(hideProgram(windowId, isShowing))
});

export default connect(null, mapDispatchToProps)(TaskbarItem);