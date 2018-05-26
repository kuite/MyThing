/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { CHANGE_MYPROPPM, LOAD_TEXT } from './constants'
import { changeUsername, changeText, injectServerText } from './actions';
import axios from 'axios';

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
  var takenString = "placeholder for server string";
 // var response = getText();

  //try {
  //   const requestPromise = axios.get('http://localhost:5000/api/Values');
  //   requestPromise.then(function (response) {
  //     // console.log(response.data); // ex.: { user: 'Your User'}
  //     // console.log(response.status);
  //     put(injectServerText(response.data));
  //   })
    
  // } catch (err) {
  //   yield put(injectServerText(err));
  // }
  //console.log(response);
  //console.log(response)
  //yield put(injectServerText(response));

  const requestURL = 'http://localhost:5000/api/Values';
  //const requestURL = `https://httpbin.org/get`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(injectServerText(response));
  } catch (err) {
    yield put(injectServerText(err));
  }

}

function getText(){
  try{
    const requestPromise = axios.get('http://localhost:5000/api/Values');
    requestPromise.then(function (response) {
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status);
      return response.data;
    })
  }catch(ex){
    console.log(ex);
    return ex;
  }
}

export default function* serverExampleText() {
  // Watches for LOAD_REPOS actions and calls getServerText when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution 
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TEXT, getServerText);
}