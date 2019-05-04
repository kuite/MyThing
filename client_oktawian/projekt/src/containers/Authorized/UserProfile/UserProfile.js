import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../../components/navbar';
import {Footer} from '../../../components/footer';

import '../../../global-styles';

import {UserStatistics} from '../../../components/Authorized/UserProfile/information';


export default class UserProfile extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <UserStatistics/>
                <Footer/>
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
