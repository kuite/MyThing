import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';

import {Navbar} from '../../components/navbar';

import {PlanAdvantageOne, PlanAdvantageTwo, PlanAdvantageThree} from '../../components/Plans/Advantages';
import {PlanStartOne, PlanStartTwo, PlanStartThree} from '../../components/Plans/Elements';


import { Link } from 'react-router-dom';

import '../../global-styles';

import BasicImg from '../../img/basic.svg';




export default class Basic extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <BasicBackground/>
             </div>
        )
    }
};

class BasicBackground extends Component{

    render(){
        return(
            <div>
               <img src ={BasicImg}/>

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
                                    {/* <Col sm={{size:4}}> <BasicStartThree/>    </Col> */}
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






















