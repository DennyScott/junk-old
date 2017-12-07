import React from 'react';
import Computer from './computer';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

const minProps = {};

const getMinComponent = () => <Computer {...minProps} />;

it('Computer renders correctly', () => {
  rendersCorrectly(getMinComponent());
});

it('Computer matches snapshot correctly', () => {
  matchesSnapshot(getMinComponent());
});
