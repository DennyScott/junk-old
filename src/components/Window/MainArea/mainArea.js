import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotepadText = styled.textarea`
    overflow: auto;
    resize: none;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    border: none;
`

const MainArea = styled.div`
    text-align: left;
    font-family: 'Lucida Sans Regular';
    font-size: 12px;
    height: calc(100% - 50px);
    width: 100%;
`

const mainArea = props => (
    <MainArea>
        <NotepadText >
            {props.text}
        </NotepadText>
    </MainArea>
)

mainArea.propTypes = {
    text: PropTypes.string,
}

mainArea.defaultProps = {
    text: '',
}

export default mainArea;