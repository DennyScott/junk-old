import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getDetailedActivePrograms } from 'selectors/activePrograms';
import { getDesktopContents } from 'selectors/drive';
import { openProgram } from 'components/program';
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

export class Desktop extends Component {
  renderNotepad(program) {
    return (
      <Notepad
        key={program.windowId}
        program={program}
        text={program.payload.text}
        className="notepad"
      />
    );
  }

  renderExplorer(program) {
    return (
      <Explorer key={program.windowId} program={program} className="explorer" />
    );
  }

  renderPassword(program) {
    return (
      <PasswordDialog
        key={program.windowId}
        program={program}
        className="password-dialog"
      />
    );
  }

  renderProgramWindow() {
    return this.props.activePrograms.map(program => {
      switch (program.id) {
        case NOTEPAD:
          return this.renderNotepad(program);
        case EXPLORER:
          return this.renderExplorer(program);
        case PASSWORD_DIALOG:
          return this.renderPassword(program);
        default:
          return null;
      }
    });
  }

  render() {
    return (
      <DesktopDiv>
        <DesktopIcons className="desktop-icons">
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

        <OpenWindows className="open-windows">
          {this.renderProgramWindow()}
        </OpenWindows>
      </DesktopDiv>
    );
  }
}

export const mapStateToProps = state => ({
  contents: getDesktopContents(state),
  programs: state.programs,
  activePrograms: getDetailedActivePrograms(state),
});

export const mapDispatchToProps = dispatch => ({
  openProgram: program => dispatch(openProgram(program)),
  createVariable: (variableName, payload) =>
    dispatch(storeVariable(variableName, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
