import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';

import Icon1 from '../../../img/increase_icon_1.svg';
import Icon2 from '../../../img/increase_icon_2.svg';
import Icon3 from '../../../img/increase_icon_3.svg';

export class IncreaseStep extends Component{

    render(){
        return(
            <div>                       
                <Container>
                    <Row>
                        <Col sm={{size:12}}>
                        <h1>How to increase your funds?</h1>
                        </Col>

                        <Col sm={{size:4}}>
                        <img src ={Icon1}/>
                         <h2>1. Add your idea</h2>
                         <div className="Rectangle"></div>
                         <p>Do you need support for your business or non profit idea?
                             Add your own and explain why it is worth investing in it</p>
                             <Link to="/fund"><button className="SecondaryButton">Start Now!</button></Link>
                        </Col>

                        <Col sm={{size:4}}>
                        <img src ={Icon2}/>
                         <h2>2. Invest in other ideas</h2>
                         <div className="Rectangle"></div>
                         <p>By investing in someone's ideas, you get a percentage of capital growth</p>
                         <Link to="/browseideas"><button className="SecondaryButton">Start Now!</button></Link>
                        </Col>

                        <Col sm={{size:4}}>
                        <img src ={Icon3}/>
                             <h2>3.Choose investment plan</h2>
                            <div className="Rectangle"></div>
                             <p>Become a member of the club and receive a percentage of each investment in this portal</p>
                             <Link to="/earnwithus"> <button className="SecondaryButton">Start Now!</button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};
