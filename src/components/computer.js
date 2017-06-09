import React, { Component } from 'react';
import { getOpenPrograms } from '../selectors/openPrograms';
import WorkDesk from './Desktop/workDesk';
import Taskbar from './Desktop/Taskbar/taskbar';
import { connect } from 'react-redux';
import './computer.css';

class Computer extends Component {
  render() {
    return (
        <div className="computer">
            <WorkDesk />
            <Taskbar openPrograms={this.props.openPrograms}/>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    openPrograms: getOpenPrograms(state)
});

export default connect(mapStateToProps)(Computer);
