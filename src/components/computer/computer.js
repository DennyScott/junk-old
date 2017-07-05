import React, { Component } from 'react';
import styled from 'styled-components';
import Desktop from 'components/desktop';
import Taskbar from 'components/taskbar';

const ComputerDiv = styled.div`
    height: 100%
`

class Computer extends Component {
  render() {
    return (
        <ComputerDiv>
            <Desktop />
            <Taskbar />
        </ComputerDiv>
    )
  }
}

export default Computer;
