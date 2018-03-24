import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  closeProgram,
  openNewProgram,
  hideProgram,
  fullscreenProgram,
  openProgram,
} from './';

function isProgram(WrappedComponent, program) {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const mapDispatchToProps = dispatch => ({
  closeProgram: (id, windowId) => dispatch(closeProgram(id, windowId)),
});

export default connect(null, mapDispatchToProps)(isProgram);
