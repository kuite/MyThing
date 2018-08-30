import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';


import {Navbar} from '../../../components/navbar';
import '../../../global-styles';

import {Funds} from '../../../components/Authorized/HomePage/funds';

export default class ActiveHedges extends Component{

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

const connectedActiveHedges = connect(mapStateToProps)(ActiveHedges);
export { connectedActiveHedges as ActiveHedges };
