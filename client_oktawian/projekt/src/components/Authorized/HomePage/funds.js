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

                        <Col sm={{size:12}}>

                                <div class ="PlanWidget">
                                    <p> Your currently plan:</p>
                                    <h1>Basic</h1>
                                    <p>expires in: 5 days</p>

                                    <h3> You invest: 0.005 BTC</h3>
                                    <h3> Available funds: 0.0057 BTC </h3><p> + 0.0002 /day</p>
                                    
                                    <Link to="/increase"> <button className="Login"> Upgrade</button></Link>
                                    <button className="SecondaryButton">Withdraw</button> 

                                </div>

                         </Col>


                        <Col sm={{size:6}}>

                            <div className ="BitcoinAvailable">
                                <h4>My Investments</h4>
                                <p>Check all your investments and profits from ideas</p>

                                <div className ="Rectangle"></div>
                                <Link to="/login" className="btn btn-link">Name of invested Idea 1</Link><br/>
                                <Link to="/login" className="btn btn-link">Name of invested Idea 2</Link><br/>
                                <Link to="/login" className="btn btn-link"> Name of invested Idea 3</Link>

                            </div>

                        </Col>

                        <Col sm={{size:6}}>

                            <div class ="BitcoinAvailable">
                                <h4>My Ideas</h4>
                                <p>Check your ideas and other people's investments in them</p>
                                <div className ="Rectangle"></div>
                                <Link to="/login" className="btn btn-link">Name of user Idea 1</Link><br/>
                                <Link to="/login" className="btn btn-link">Name of user Idea 2</Link><br/>
                                <Link to="/login" className="btn btn-link">Name of user Idea 3</Link>

                            </div>

                         </Col>


                    
                    </Row>
                </Container>
             </div>
        )
    }
};
