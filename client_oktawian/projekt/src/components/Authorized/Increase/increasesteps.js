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


                        <Col sm={{size:4}}>
                        <div className ="IncreaseOpportunity">
                            <img src ={Icon1}/>
                            <h2>1. Add your Fundraiser</h2>
                            <div className="Rectangle"></div>
                            
                            <p>Do you need support for your fundraiser for you or your family/friends? </p>
                                <Link to="/fund"><button className="SecondaryButton">Add idea now</button></Link>
                        </div>
                        </Col>

                        <Col sm={{size:4}}>
                        <div className ="IncreaseOpportunity">
                        <img src ={Icon2}/>
                         <h2>2. Helping other </h2>
                         <div className="Rectangle"></div>
                         <p>You also can help other people achieve their idea.</p>
                         <Link to="/browseideas"><button className="SecondaryButton">Browse ideas</button></Link>
                        </div>
                        </Col>

                        <Col sm={{size:4}}>
                        <div className ="IncreaseOpportunity">
                        <img src ={Icon3}/>
                             <h2>3.Choose Hedgefund</h2>
                            <div className="Rectangle"></div>
                             <p>Become a member of the club and receive a percentage of each investment in this portal</p>
                             <Link to="/earnwithus"> <button className="SecondaryButton">Choose plan</button></Link>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};



