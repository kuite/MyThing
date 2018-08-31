import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

import LightningPlan from '../../../img/lightningplan.jpg';


export class Lightning extends Component{

    render(){
      return(
        <div>
          <Container>
          <Row>
            <div className ="Plan">
  
            <img src ={LightningPlan}/>
                <h1>Lightning</h1>
                <p>90 days<br/>
                15%<br/>
                0.5 BTC <br/>
                </p>
                <Link to ="/Lightning"><button className ="SecondaryButton">Learn More...</button></Link>
            </div>
          </Row>
          </Container>
        </div>
      )
    }
  }