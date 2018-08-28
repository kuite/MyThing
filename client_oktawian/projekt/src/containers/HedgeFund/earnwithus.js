import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Navbar} from '../../components/navbar';
import { Link } from 'react-router-dom';

import '../../global-styles';

import {PlansHeader} from '../../components/HedgeFund/Plans/plansheader';
import {Work, Start} from './Plans/basic';

import BasicImg from '../../img/basic.svg';
import IntermediateImg from '../../img/intermediate.svg';





export default class Browseideas extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Plans/>
             </div>
        )
    }
};



export class Plans extends Component{

    render(){
        return(
            <div className="PlansHeader">       

                <PlansHeader/>  
                <Work/>
                <Plan/>
                <Start/>

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



class Lightning extends Component{

  render(){
    return(
      <div>
        <Container>
        <Row>
          <div>
              <h1>Lightning</h1>
              <p>90 days</p>
              <p>15%</p>
              <p>0.5 BTC </p>
              <button className ="SecondaryButton">Learn More...</button>
          </div>
        </Row>
        </Container>
      </div>
    )
  }
}

class Storm extends Component{

  render(){
    return(
      <div>
        <Container>
        <Row>
            <h1>Storm</h1>
        </Row>
        </Container>
      </div>
    )
  }
}



