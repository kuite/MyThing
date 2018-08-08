import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Navbar} from '../../components/navbar';
import { Link } from 'react-router-dom';

import '../../global-styles';

import ProImg from '../../img/pro.svg';




export default class Pro extends Component{

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
                                    <Col sm={{size:4}}> <BasicStartOne/>   </Col>   
                                    <Col sm={{size:4}}> <BasicStartTwo/>   </Col>
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
                                <Col sm={{size:4}}> <BasicAdvantageOne/>   </Col>   
                                <Col sm={{size:4}}> <BasicAdvantageTwo/>   </Col>
                                <Col sm={{size:4}}> <BasicAdvantageThree/>    </Col>
                            </Row>
                         </div>
                    </div>
                </Container>       

            </div>
        )
    }
};






class BasicAdvantageOne extends Component{

    render(){
        return(
                <div class ="PlanElement">
                <h2>1. Deposit cryptocurrencies</h2>
                <div className ="Rectangle"></div>
                <p>Deposit cryptocurrencies using our system, after logging in you can fully manage your shares, add ideas and support other</p>
                </div>
        )
    }
};

class BasicAdvantageTwo extends Component{

    render(){
        return(
                <div class ="PlanElement">
                <h2>2. Measure results</h2>
                <div className ="Rectangle"></div>
                <p>Check if others support your initiatives and monitor the profit and rotation of bitcoins in your profile</p>
                </div>
        )
    }
};

class BasicAdvantageThree extends Component{

    render(){
        return(
                <div class ="PlanElement">
                <h2>3. Withdraw your profits</h2>
                <div className ="Rectangle"></div>
                <p>Withdraw your capital in the intervals specified by the system</p>
                </div>
        )
    }
};
















class BasicStartOne extends Component{

    render(){
        return(
                <div class ="PlanElement">
                    <h2>1. Create account</h2>
                    <div className ="Rectangle"></div>
                    <p>First step is getting free account. Let's create and explore. It's easy and fast.</p>
                    <Link to="/register"><button className="SecondaryButton">Register</button></Link>
                </div>
        )
    }
};

class BasicStartTwo extends Component{

    render(){
        return(
                <div class ="PlanElement">
                    <h2>2. Choose the best plan for you </h2>
                    <div className ="Rectangle"></div>
                    <p>Make a decision and participate in the rotation of cryptocurrencies designated for business and non-profit initiatives</p>
                </div>
        )
    }
};

class BasicStartThree extends Component{

    render(){
        return(
                 <div class ="PlanElement">
                    <h2>3. Choose plan and do nothing</h2>
                    <div className ="Rectangle"></div>
                    <p>withdraw your capital in the intervals specified by the system</p>
                </div>
        )
    }
};