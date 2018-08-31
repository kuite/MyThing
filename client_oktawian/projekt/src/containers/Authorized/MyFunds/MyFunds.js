import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';


import {Navbar} from '../../../components/navbar';
import '../../../global-styles';


export default class MyFunds extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <NoFunds/>
             </div>
        )
    }
};

class NoFunds extends Component{

    render(){
        return(
            <div className="HomeFund">
            <Container>
                <div className ="BitcoinAvailable">
                <h2>No active funds</h2>
                <button className ="Login">Add fund now</button>
                </div>
            </Container>
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
