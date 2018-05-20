/*
 * Example Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  CHANGE_MYPROPPM,
  LOAD_TEXT,
  LOAD_SERVER_TEXT_SUCCESS
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}


/**
 * Changes the value of myPropPM
 *
 * @param  {myPropPM} myPropPM The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_MYPROPPM
 */
export function changeText(myPropPM) {
  return {
    type: CHANGE_MYPROPPM,
    myPropPM
  };
}


/**
 * Load the server text, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TEXT
 */
export function loadServerText(){
  return{
    type: LOAD_TEXT,
  }
}


/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {string} textServer The current username
 *
 * @return {object}      An action object with a type of LOAD_SERVER_TEXT_SUCCESS passing the text
 */
export function injectServerText(textServer){
  return{
    type: LOAD_SERVER_TEXT_SUCCESS,
    textServer
  }
}