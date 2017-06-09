import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const MenuTray = styled.div`
    height: 100%;
    width: 200px;
    background-color: lightgrey;
    margin-left: auto;
`

const ComputerTime = styled.div`

`

const menutray = props =>(
    <MenuTray >
        <ComputerTime>
            {moment.utc(moment.now()).local().format('LT')}
        </ComputerTime>
    </MenuTray>
);

export default menutray;