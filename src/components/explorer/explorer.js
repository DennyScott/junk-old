import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationBar } from 'components/program-window';
import ProgramWindow from 'components/program-window';
import Directory from './components/directory';

import {
  openFolder,
  backFolder,
  upFolder,
  forwardFolder,
} from 'actions/explorer';

class Explorer extends Component {
  static propTypes = {
    program: PropTypes.object.isRequired,
  };

  clickDirectory = objectKey => {
    this.props.openFolder(
      this.props.program.windowId,
      objectKey,
      this.props.program.currentDirectory[objectKey],
    )
  }

  render() {
    return (
      <ProgramWindow program={this.props.program} displayMenu>
        <NavigationBar
          upButtonClick={() => this.props.upFolder(this.props.program.windowId)}
          backButtonClick={() => this.props.backFolder(this.props.program.windowId)}
          forwardButtonClick={() => this.props.forwardFolder(this.props.program.windowId)}
        />
        {
          Object.keys(this.props.program.currentDirectory).map(key => (
            <Directory key={key} objectKey={key} program={this.props.program} onDirectoryClick={() => this.clickDirectory(key)} />
          ))
        }
      </ProgramWindow>
    );
  }
}

const mapStateToProps = state => ({
  drive: state.drive,
});

const mapDispatchToProps = dispatch => ({
  openFolder: (windowId, key, folder) =>
    dispatch(openFolder(windowId, key, folder)),
  upFolder: id => dispatch(upFolder(id)),
  backFolder: id => dispatch(backFolder(id)),
  forwardFolder: id => dispatch(forwardFolder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
