import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UrlDiv = styled.div``;

const urlBar = props =>(
    <UrlDiv>
        <input type="text" value={this.props.url} />
    </UrlDiv>
);

urlBar.propTypes = {
    url: PropTypes.string.isRequired
}

export default urlBar;