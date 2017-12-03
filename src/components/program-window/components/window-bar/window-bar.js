import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './window-bar.css';

const windowBar = props => (
  <div className={props.isDragable ? 'window-bar handle' : 'window-bar'}>
    <FontAwesome
      className="pull-right close-icon bar-icon"
      name="close-thin"
      onClick={props.closeAction}
    />
    <FontAwesome
      className="pull-right maximize-icon bar-icon"
      name="window-maximize"
      onClick={props.maximizeAction}
    />
    <FontAwesome
      className="pull-right minimize-icon bar-icon"
      name="window-minimize"
      onClick={props.minimizeAction}
    />
  </div>
);

windowBar.propTypes = {
  minimizeAction: PropTypes.func,
  maximizeAction: PropTypes.func,
  closeAction: PropTypes.func,
  isDragable: PropTypes.bool.isRequired,
};

export default windowBar;
