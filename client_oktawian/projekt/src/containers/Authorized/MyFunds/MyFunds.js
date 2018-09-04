import React, { Component } from 'react';

import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




import '../../../global-styles';


export default class MyFunds extends Component{

    render(){
        return(
            <div>
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
                <Link to ="/fund"><button className ="Login">Add fund now</button></Link>
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
