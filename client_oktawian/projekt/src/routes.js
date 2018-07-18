import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {Navbar} from './components/navbar';

import home from './containers/home';
import fund from './containers/fund';
import browseideas from './containers/browseideas';
import earnwithus from './containers/earnwithus';
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
            </div>
          </Router>

        );
      }
}

