import React, { Component } from 'react';

import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import ScrollToTopRoute from './scrolltotop';

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

import {ActiveHedges} from './containers/Authorized/ActiveHedges/ActiveHedges';
import {UserProfile} from './containers/Authorized/UserProfile/UserProfile';
import {MyFunds} from './containers/Authorized/MyFunds/MyFunds';


//Payment
import withdraw from './containers/Authorized/Withdraw/Withdraw.js';
import deposit from './containers/Authorized/Deposit/Deposit.js';

/*
configureFakeBackend();
*/
function scrollToTop() {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
}

class App extends Component {
    
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <div>
                                        
            <Router onUpdate= {scrollToTop} history={history}>
            <div>
             <SignInModule/> 

              <ScrollToTopRoute exact path="/" component={home} />
              <ScrollToTopRoute path="/fund" component={fund} />
              <ScrollToTopRoute path="/browseideas" component={browseideas} />
              <ScrollToTopRoute path="/earnwithus" component={earnwithus} />
              <ScrollToTopRoute path="/register" component={RegisterPage} />
              <ScrollToTopRoute path="/login" component={LoginPage} />

              <ScrollToTopRoute path="/idea" component={idea} />

              <ScrollToTopRoute path="/lightning" component={Lightning} />
              <ScrollToTopRoute path="/storm" component={Storm} />
              <ScrollToTopRoute path ="/increase" component ={increase}/>
              <ScrollToTopRoute path ="/policy" component ={policyprivacy}/>

              <PrivateRoute path ="/homepage" component ={homepage}/>

              <PrivateRoute path ="/activehedges" component ={ActiveHedges}/>
              <PrivateRoute path ="/userprofile" component ={UserProfile}/>
              <PrivateRoute path ="/myfunds" component ={MyFunds}/>

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