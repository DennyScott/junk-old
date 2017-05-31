import React from 'react';
import PropTypes from 'prop-types';
import './mainArea.css';

const mainArea = props => (
    <div className="main-area">
        {props.text}
    </div>
)

mainArea.propTypes = {
    text: PropTypes.string,
}

mainArea.defaultProps = {
    text: '',
}

export default mainArea;