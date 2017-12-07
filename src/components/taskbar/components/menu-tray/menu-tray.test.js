import React from 'react';
import MenuTray from './menu-tray';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

const minProps = {};

const getMinComponent = () => <MenuTray {...minProps} />;

it('MenuTray renders correctly', () => {
  rendersCorrectly(getMinComponent(), expect);
});

it('MenuTray render matches snapshot', () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf());
  matchesSnapshot(getMinComponent(), expect);
});
