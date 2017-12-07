import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import menuTray from '../../assets/menutray.png';

const MenuTray = styled.div`
  height: 100%;
  width: 100px;
  background-image: url(${menuTray});
  background-repeat: repeat-x;
  border-left: 1px solid #444;
  margin-left: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: lighter;
  font-family: Arial;
`;

const ComputerTime = styled.div``;

const menutray = props => (
  <MenuTray>
    <ComputerTime>
      {moment
        .utc(moment.now())
        .format('LT')}
    </ComputerTime>
  </MenuTray>
);

export default menutray;
