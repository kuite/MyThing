import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import home from './containers/home';
import fund from './containers/fund';
import browseideas from './containers/browseideas';
import earnwithus from './containers/earnwithus';

import idea from './containers/idea';
import plan from './containers/plan';

import {RegisterPage} from './containers/RegisterPage/RegisterPage.jsx';
import {LoginPage} from './containers/LoginPage/LoginPage.jsx';



export class Routing extends Component {
    render() {
      return (


          <Router>
            <div>
                

              <Route exact path="/" component={home} />
              <Route path="/fund" component={fund} />
              <Route path="/browseideas" component={browseideas} />
              <Route path="/earnwithus" component={earnwithus} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />

              <Route path="/idea" component={idea} />
              <Route path="/plan" component={plan} />
            </div>
          </Router>

        );
      }
}

