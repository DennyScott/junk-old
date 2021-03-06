import React from 'react';
import PropTypes from 'prop-types';

const directory = props => (
  <div key={props.objectKey} onClick={() => props.onDirectoryClick(props.objectKey)}>
    <span>{props.objectKey}</span>
  </div>
);

directory.propTypes = {
  program: PropTypes.object.isRequired,
  objectKey: PropTypes.string.isRequired,
  onDirectoryClick: PropTypes.func.isRequired,
};

export default directory;
