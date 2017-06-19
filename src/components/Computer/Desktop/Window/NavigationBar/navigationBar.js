import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavigationBarDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: blue;
    cursor: default;
    display: flex;
    align-items: flex-end;
`

const NavigationItem = styled.span`
    height: 100%;
    background-color: lightblue;
    width: 75px;
    cursor:pointer;
`

const navigationBar = props =>(
    <NavigationBarDiv>
        <NavigationItem>
            Back
        </NavigationItem>

        <NavigationItem>
            Forward
        </NavigationItem>

        <NavigationItem>
            Up
        </NavigationItem>
    </NavigationBarDiv>
);

export default navigationBar;