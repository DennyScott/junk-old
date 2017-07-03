import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import buttonImage from '../../assets/xp_btn.png';
import { notepadIcon } from 'modules/desktop';

const TaskbarItemWrapper = styled.div`
    max-width: 148px;
    flex-basis: auto; /* default value */
    flex-grow: 1;
    height: 25px;
    background-image: url(${buttonImage});
    background-repeat: no-repeat;
    cursor: pointer;
    color: white;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    margin-top: 3px;
`;

const TaskbarItemIcon = styled.img`
    height: 16px;
    width: 16px;
    margin: 0 5px;
`;

const TaskbarItemName = styled.span`
    margin-top: 2px;
`;

const taskbarItem = props =>(
    <TaskbarItemWrapper onClick={() => props.onClick()}>
        <TaskbarItemIcon src={notepadIcon} />
        <TaskbarItemName>{props.name}</TaskbarItemName>
    </TaskbarItemWrapper>
)

taskbarItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default taskbarItem;
