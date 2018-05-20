/*
 * ExampleReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  CHANGE_MYPROPPM,
  LOAD_TEXT,
  LOAD_SERVER_TEXT_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  myPropPM: 'initial value myPropPM',
  textServerProp : 'initial text server string'
});

function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TEXT:
      return state
        .set('textServerProp', 'loading');
    case LOAD_SERVER_TEXT_SUCCESS:
      return state
        .set('textServerProp', action.textServer);
      case CHANGE_MYPROPPM:
      return state
        .set('myPropPM', action.myPropPM);
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default exampleReducer;
