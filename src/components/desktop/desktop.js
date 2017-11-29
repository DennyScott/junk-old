import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getDetailedActivePrograms } from 'selectors/activePrograms';
import { getDesktopContents } from 'selectors/drive';
import { openProgram } from 'actions/activeProgram';
import { storeVariable } from 'actions/variable';
import Icon from './components/icon';
import Notepad from 'components/notepad';
import Explorer from 'components/explorer';
import PasswordDialog from 'components/password-dialog';
import { NOTEPAD, EXPLORER, PASSWORD_DIALOG } from 'programs';

const DesktopDiv = styled.div`
  height: calc(100% - 50px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  position: fixed;
`;

const OpenWindows = styled.div`
  height: 100%;
`;

const DesktopIcons = styled.div`
  height: 100%;
`;

class Desktop extends Component {
  renderProgramWindow() {
    return this.props.activePrograms.map(program => {
      switch (program.id) {
        case NOTEPAD:
          return (
            <Notepad
              key={program.windowId}
              program={program}
              text={program.payload.text}
            />
          );
        case EXPLORER:
          return <Explorer key={program.windowId} program={program} />;
        case PASSWORD_DIALOG:
          return <PasswordDialog key={program.windowId} program={program} />;
        default:
          return null;
      }
    });
  }

  render() {
    return (
      <DesktopDiv>
        <DesktopIcons>
          {Object.keys(this.props.contents).map(key => (
            <Icon
              key={key}
              onDoubleClick={() =>
                this.props.openProgram(this.props.contents[key])
              }
              name={key}
              logo={this.props.contents[key].logo}
            />
          ))}
        </DesktopIcons>

        <OpenWindows>{this.renderProgramWindow()}</OpenWindows>
      </DesktopDiv>
    );
  }
}

const mapStateToProps = state => ({
  contents: getDesktopContents(state),
  programs: state.programs,
  activePrograms: getDetailedActivePrograms(state),
});

const mapDispatchToProps = dispatch => ({
  openProgram: program => dispatch(openProgram(program)),
  createVariable: (variableName, payload) =>
    dispatch(storeVariable(variableName, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
