/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { CHANGE_MYPROPPM, LOAD_TEXT } from './constants'
import { changeUsername, changeText, injectServerText } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/ExamplePage/selectors';


export function* serverText() {
  // Watches for CHANGE_MYPROPPM actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CHANGE_MYPROPPM, getText);
}

export function* getServerText(){
  yield put(injectServerText("pobrany string"));
}

export default function* serverExampleText() {
  // Watches for LOAD_REPOS actions and calls getServerText when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution 
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TEXT, getServerText);
}