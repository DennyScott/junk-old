import React from 'react';
import PropTypes from 'prop-types';
import ProgramWindow from './programWindow';

const explorer = props => (
    <ProgramWindow program={props.program} displayMenu={true}>
    </ProgramWindow>
);

explorer.propTypes = {
};

export default explorer;
