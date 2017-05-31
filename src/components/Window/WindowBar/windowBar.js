import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './windowBar.css';

const windowBar = props =>(
    <div className={props.isDragable ? 'window-bar handle' : 'window-bar'}>
        <FontAwesome
            className="pull-right"
            name="window-minimize"
            onClick={props.minimizeAction}
        />
        <FontAwesome
            className="pull-right"
            name="window-maximize"
            onClick={props.maximizeAction}
        />
        <FontAwesome 
            className="pull-right close-icon"
            name='close-thin'
            onClick={props.closeAction}
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
