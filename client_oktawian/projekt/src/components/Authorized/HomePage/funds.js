import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';

export class Funds extends Component{

    render(){
        return(     
            <div className ="HomeFund">                     
                <Container>
                    <Row>
                    
                        <Col sm={{size:12}}>

                        <div class ="BitcoinAvailable">
                            <p> Available funds:</p>
                            <h1>3,04343 BTC</h1>

                            <Link to="/increase"> <button className="Login"> Increase</button></Link>
                            <button className="SecondaryButton">Deposit</button>
                            <button className="SecondaryButton">Withdraw</button> 
                        </div>

                        </Col>

                        <Col sm={{size:6}}>

                            <div class ="BitcoinAvailable">
                                <h3>My Investments</h3>
                                <p>Check all your investments and profits from ideas</p>

                                <div className ="Rectangle"></div>
                                <Link to="/login" className="btn btn-link">Idea 1</Link>
                                <Link to="/login" className="btn btn-link">Idea 2</Link>
                                <Link to="/login" className="btn btn-link">Idea 3</Link>

                            </div>

                        </Col>

                        <Col sm={{size:6}}>

                            <div class ="BitcoinAvailable">
                                <h3>My Ideas</h3>
                                <p>Check your ideas and other people's investments in them</p>
                                <div className ="Rectangle"></div>
                                <Link to="/login" className="btn btn-link">Idea 1</Link>
                                <Link to="/login" className="btn btn-link">Idea 2</Link>
                                <Link to="/login" className="btn btn-link">Idea 3</Link>

                            </div>

                            </Col>
                    
                    </Row>
                </Container>
             </div>
        )
    }
};
