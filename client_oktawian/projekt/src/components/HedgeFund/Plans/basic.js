import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';

import {Navbar} from '../../../components/navbar';

import {PlanAdvantageOne, PlanAdvantageTwo, PlanAdvantageThree} from '../../../components/HedgeFund/Plans/Advantages';
import {PlanStartOne, PlanStartTwo} from '../../../components/HedgeFund/Plans/Elements';

import {RoleAwareComponent, RoleAwareComponentUser} from '../../roleawarecomponent';


import { Link } from 'react-router-dom';

import '../../../global-styles';

import BasicImg from '../../../img/basic.svg';




export class Start extends RoleAwareComponent{

    constructor(props) {
        super(props);

        // component will be visible for the roles below:
        this.authorize = ['user'];
      }

    render(){

            const jsx = (
                <Container>

                <div className = "PlanAdvantages">
                <Row>
                     <Col sm={{size:12}}>
                    <h1>How to start?</h1>
                    <p>Get to know the system and see for yourself how you can gradually increase your capital and support interesting initiatives!</p>
                    </Col>   
                    
                    </Row>
                    <div className="PlanSection">
                        <Row>
                                <Col sm={{size:4}}> <PlanStartOne/>   </Col>   
                                <Col sm={{size:4}}> <PlanStartTwo/>   </Col>
                        </Row>
                    </div>
                </div>
            </Container>       

              );

              return this.shouldBeVisible() ? jsx : null;
        
    }
}

export class Work extends Component{

    render(){
        return(
            <div>
                   <Container>
                   <div className = "PlanAdvantages">
                    <Row>
                        <Col sm={{size:12}}>
                        <h1>How it works?</h1>
                        <p>Get to know the system and see for yourself how you can gradually increase your capital and support interesting initiatives!</p>
                        </Col>   
                        </Row>
                        <div className="PlanSection">
                            <Row>
                                <Col sm={{size:4}}> <PlanAdvantageOne/>   </Col>   
                                <Col sm={{size:4}}> <PlanAdvantageTwo/>   </Col>
                                <Col sm={{size:4}}> <PlanAdvantageThree/>    </Col>
                            </Row>
                         </div>
                    </div>
                </Container>       

            </div>
        )
    }
};






















