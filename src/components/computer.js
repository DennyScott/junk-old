import React, { Component } from 'react';
import { getOpenPrograms } from '../selectors/openPrograms';
import WorkDesk from './Desktop/workDesk';
import Taskbar from './Desktop/Taskbar/taskbar';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ComputerDiv = styled.div`
    height: 100%
`

class Computer extends Component {
  render() {
    return (
        <ComputerDiv>
            <WorkDesk />
            <Taskbar openPrograms={this.props.openPrograms}/>
        </ComputerDiv>
    )
  }
}

const mapStateToProps = state => ({
    openPrograms: getOpenPrograms(state)
});

export default connect(mapStateToProps)(Computer);
