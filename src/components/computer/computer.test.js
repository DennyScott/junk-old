import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Computer from './computer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

const minProps = {};

const getMinComponent = () => <Computer {...minProps} />;

it('Computer renders correctly', () => {
  rendersCorrectly(getMinComponent(), expect);
});

it('Computer matches snapshot correctly', () => {
  matchesSnapshot(getMinComponent(), expect);
});
