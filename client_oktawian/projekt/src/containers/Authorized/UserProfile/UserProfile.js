import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';


import {Navbar} from '../../../components/navbar';
import '../../../global-styles';

import {UserStatistics} from '../../../components/Authorized/UserProfile/information';

import Avatar from '../../../img/avatar.svg'

export default class UserProfile extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <UserStatistics/>
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

const connectedUserProfile = connect(mapStateToProps)(UserProfile);
export { connectedUserProfile as UserProfile };
