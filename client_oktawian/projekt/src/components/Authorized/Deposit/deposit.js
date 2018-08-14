import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col } from 'reactstrap';

import {PaymentModalfinal} from '../Payment/paymentmodal'

import SecureIcon from '../../../img/secureicon.svg'

export class Deposit extends Component{

    render(){
        return(     
            <div className ="HomeFund">                     
                <Container>
                    <Row>
                    
                        <Col sm={{size:12}}>
                        <div class ="BitcoinAvailable">
                        <h1>Deposit:</h1>
                        <h3> Available funds: 3,04343 BTC </h3>
                        
                        <DepositSteps/>
                        <Payment/>
                        </div>
                        </Col>

                        

                    
                    </Row>
                </Container>
             </div>
        )
    }
};


export class DepositSteps extends Component{

    render(){
        return(
            <div className ="DepositSteps">
                <Row>
                   <Col sm={{size:3}}><h2>1. Choose amount</h2>
                   <div className ="Rectangle"></div>
                   <p>Firsly you should write amount of transaction
                    </p>
                   
                   </Col>         

                   <Col sm={{size:3}}><h2>2. Unique Adress</h2>
                   <div className ="Rectangle"></div>
                   <p>You get adress to initiate payment using your software or online wallet
                    </p>
                   
                   </Col>  

                   <Col sm={{size:3}}><h2>3. Unique Number</h2>
                   <div className ="Rectangle"></div>
                   <p>Verification code is neccessary to verify that you are the transaction sender
                    </p>
                   
                   </Col>  

                   <Col sm={{size:3}}><h2>4. Succesfully added</h2>
                   <div className ="Rectangle"></div>
                   <p>Review the status of your transaction. It's usually takes 10-45 minutes to confirm and authorize your payment
                    </p>
                   
                   </Col>  
                </Row>   
            </div>
        )
    }
};

export class Payment extends Component {
    render(){
        return(
            <div className ="Deposit Steps">
                <PaymentModalfinal/>
                <div>
                    <img src = {SecureIcon}/>
                    <p> Read about secure policy</p>
                </div>

            </div>
        )
    }
};