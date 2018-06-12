/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectExample = (state) => state.get('example');

const makeSelectMyPropPM = () => createSelector(
  selectExample,
  (homeState) => homeState.get('myPropPM')
);

const makeSelectUsername = () => createSelector(
  selectExample,
  (homeState) => homeState.get('username')
);

const makeSelectTextServer = () => createSelector(
  selectExample,
  (homeState) => homeState.get('textServerProp')
);

export {
  makeSelectUsername,
  makeSelectMyPropPM,
  makeSelectTextServer
};