import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

import StormPlan from '../../../img/stormplan.jpg';

export class Storm extends Component{

    render(){
      return(
        <div>
          <Container>
          <Row>
            <div className ="Plan">
  
            <img alt ="Storm HedgeFund" src ={StormPlan}/>
                <h1>Storm</h1>
                <p>270 days<br/>
                8-10%<br/>
                1 BTC <br/>
                </p>
                <Link to ="/Storm"><button className ="SecondaryButton">Learn More...</button></Link>
            </div>
          </Row>
          </Container>
        </div>
      )
    }
  }