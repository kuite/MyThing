import React, { Component } from 'react';
import { connect } from 'react-redux';



import {Navbar} from '../../../components/navbar';
import '../../../global-styles';

import {Funds} from '../../../components/Authorized/HomePage/funds';

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
