import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';


import {Btc} from '../../btc_graph/src/index';

import {Navbar} from '../../components/navbar';
import '../../global-styles';

import {Funds} from '../../components/Authorized/HomePage/funds';
import {InvestmentsIdeas} from '../../components/Authorized/HomePage/investmentsideas';

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Funds/>
             </div>
        )
    }
};


function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
