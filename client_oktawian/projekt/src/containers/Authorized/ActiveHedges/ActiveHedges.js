import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';


import {Navbar} from '../../../components/navbar';
import '../../../global-styles';
import {Container, Row, Col } from 'reactstrap';

import {Funds} from '../../../components/Authorized/HomePage/funds';


import {Lightning} from '../../../components/HedgeFund/Plans/lightning';
import {Storm} from '../../../components/HedgeFund/Plans/storm';



export default class ActiveHedges extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <ActiveHedge/>
                <Plan/>
             </div>
        )
    }
};


class Plan extends Component{

    render(){
      return(
        <div>
          <Container>
          <Row>
              <Col sm={{size:6}}><Lightning/></Col>
              <Col sm={{size:6}}><Storm/></Col>
          </Row>
          </Container>
        </div>
      )
    }
  }
  

class ActiveHedge extends Component{

    render(){
        return(
        <Container>
            <Row>
                <Col sm={{size:12}}>

                <div class ="PlanWidget">
                    <p> Your currently plan:</p>
                    <h1>Basic</h1>
                    <p>expires in: 5 days</p>

                    <h3> You invest: 0.005 BTC</h3>
                    <h3> Available funds: 0.0057 BTC </h3><p> + 0.0002 /day</p>
                    
                    <Link to="/increase"> <button className="Login"> Upgrade</button></Link>
                    <Link to="/withdraw"><button className="SecondaryButton">Withdraw</button></Link>

                </div>
                </Col>
            </Row>
        </Container>

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
