import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const directory = props => (
  <div
    key={props.objectKey}
    onClick={() => props.onDirectoryClick(props.objectKey)}
  >
    {props.objectKey}
  </div>
);

directory.propTypes = {
  program: PropTypes.object.isRequired,
  objectKey: PropTypes.string.isRequired,
  onDirectoryClick: PropTypes.func.isRequired,
};

export default directory;
