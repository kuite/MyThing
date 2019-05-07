import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';


export class Withdraw extends Component{

    render(){
        return(     
            <div className ="HomeFund">                     
                <Container>
                    <Row>
                    
                        <Col sm={{size:12}}>
                        <div class ="BitcoinAvailable">
                        <h1>Withdraw:</h1>
                        <h3> Available funds: 3,04343 BTC </h3>
                        </div>
                        </Col>
                    
                    </Row>
                </Container>
             </div>
        )
    }
};
