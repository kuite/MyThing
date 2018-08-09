import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import history from './_helpers';

import {SignInModule} from './components/signin'
import {PrivateRoute } from './components';

import home from './containers/home';
import fund from './containers/fund';
import browseideas from './containers/browseideas';
import earnwithus from './containers/earnwithus';




//Plans
import Basic from './containers/Plans/basic';
import Intermediate from './containers/Plans/intermediate';
import Pro from './containers/Plans/pro'


import idea from './containers/idea';
import plan from './containers/plan';








//Authorized
import homepage from './containers/Authorized//HomePage.js';
import increase from './containers/Authorized/Increase.js';
import policyprivacy from './containers/Authorized/PolicyPrivacy';

import {RegisterPage} from './containers/RegisterPage/RegisterPage.jsx';
import {LoginPage} from './containers/LoginPage/LoginPage.jsx';




export class Routing extends Component {
    render() {
      return (


         <Router history={history}>
            <div>
             <SignInModule/> 

              <Route exact path="/" component={home} />
              <Route path="/fund" component={fund} />
              <Route path="/browseideas" component={browseideas} />
              <Route path="/earnwithus" component={earnwithus} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />

              <Route path="/idea" component={idea} />
              <Route path="/plan" component={plan} />

              <Route path="/basic" component={Basic} />
              <Route path="/intermediate" component={Intermediate} />
              <Route path="/pro" component={Pro} />

              <Route path ="/homepage" component ={homepage}/>
              <Route path ="/increase" component ={increase}/>
              <Route path ="/policy" component ={policyprivacy}/>
            
            </div>
          </Router>

        );
      }
}

