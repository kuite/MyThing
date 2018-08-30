import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';


import {Navbar} from '../../../components/navbar';
import '../../../global-styles';


export default class MyFunds extends Component{

    render(){
        return(
            <div>
                <Navbar/>
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

const connectedMyFunds = connect(mapStateToProps)(MyFunds);
export { connectedMyFunds as MyFunds };
