import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Navbar} from '../../components/navbar';
import { Link } from 'react-router-dom';

import {PlanAdvantageOne, PlanAdvantageTwo, PlanAdvantageThree} from '../../components/Plans/Advantages';
import {PlanStartOne, PlanStartTwo, PlanStartThree} from '../../components/Plans/Elements';

import '../../global-styles';

import ProImg from '../../img/pro.svg';




export default class Pro extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <ProBackground/>
             </div>
        )
    }
};

class ProBackground extends Component{

    render(){
        return(
            <div>
               <img src ={ProImg}/>

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
                                    {/* <Col sm={{size:4}}> <PlanStartThree/>    </Col> */}
                            </Row>
                        </div>
                    
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


