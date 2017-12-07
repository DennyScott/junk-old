import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MenuTray from './menu-tray';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

const minProps = {};

const getMinComponent = () => <MenuTray {...minProps} />;

it('MenuTray renders correctly', () => {
  rendersCorrectly(getMinComponent(), expect);
});

it('MenuTray render matches snapshot', () => {
  matchesSnapshot(getMinComponent(), expect);
});
