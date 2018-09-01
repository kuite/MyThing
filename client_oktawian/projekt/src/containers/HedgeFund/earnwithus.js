import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

import {Navbar} from '../../components/navbar';

import '../../global-styles';

import {PlansHeader} from '../../components/HedgeFund/Plans/plansheader';
import {Work, Start} from '../../components/HedgeFund/Plans/basic';
import {Lightning} from '../../components/HedgeFund/Plans/lightning';
import {Storm} from '../../components/HedgeFund/Plans/storm';







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








