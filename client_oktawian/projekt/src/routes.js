import React, { Component } from 'react';

import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import {SignInModule} from './components/signin'
import {PrivateRoute } from './components';


//User see before login
import home from './containers/Home/home';
import fund from './containers/Fund/fund';
import browseideas from './containers/FundRaiser/browseideas';
import earnwithus from './containers/HedgeFund/earnwithus';

//Plans
import Lightning from './containers/HedgeFund/Plans/Lightning';
import Storm from './containers/HedgeFund/Plans/Storm';


import idea from './containers/FundRaiser/idea';

//Authorized
import homepage from './containers/Authorized/Panel/HomePage';
import increase from './containers/Authorized/Increase/Increase';
import policyprivacy from './containers/Authorized/PolicyPrivacy';

import {RegisterPage} from './containers/RegisterPage/RegisterPage.jsx';
import {LoginPage} from './containers/LoginPage/LoginPage.jsx';


//Payment
import withdraw from './containers/Authorized/Withdraw/Withdraw.js';
import deposit from './containers/Authorized/Deposit/Deposit.js';

/*
configureFakeBackend();
*/


class App extends Component {
    
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            <div>
                                        
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

              <Route path="/lightning" component={Lightning} />
              <Route path="/storm" component={Storm} />

              <PrivateRoute path ="/homepage" component ={homepage}/>
              <PrivateRoute path ="/increase" component ={increase}/>
              <PrivateRoute path ="/policy" component ={policyprivacy}/>

              <PrivateRoute path ="/deposit" component ={deposit}/>
              <PrivateRoute path ="/withdraw" component ={withdraw}/>
            
            </div>
          </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 