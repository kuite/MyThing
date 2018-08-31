import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Navbar} from '../../components/navbar';
import { Link } from 'react-router-dom';

import '../../global-styles';

import {PlansHeader} from '../../components/HedgeFund/Plans/plansheader';
import {Work, Start} from '../../components/HedgeFund/Plans/basic';
import {Lightning} from '../../components/HedgeFund/Plans/lightning';
import {Storm} from '../../components/HedgeFund/Plans/storm';

import LightningPlan from '../../img/lightningplan.jpg';
import StormPlan from '../../img/stormplan.jpg';





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








