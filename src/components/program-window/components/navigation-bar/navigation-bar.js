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
`;

const NavigationItem = styled.span`
  height: 100%;
  background-color: lightblue;
  width: 75px;
  cursor: pointer;
`;

export const NavigationBar = props => (
  <NavigationBarDiv>
    <NavigationItem onClick={() => props.backButtonClick()}>
      Back
    </NavigationItem>

    <NavigationItem onClick={() => props.forwardButtonClick()}>
      Forward
    </NavigationItem>

    <NavigationItem onClick={() => props.upButtonClick()}>Up</NavigationItem>
  </NavigationBarDiv>
);

NavigationBar.propTypes = {
  backButtonClick: PropTypes.func.isRequired,
  forwardButtonClick: PropTypes.func.isRequired,
  upButtonClick: PropTypes.func.isRequired,
};
