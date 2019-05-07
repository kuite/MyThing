import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

export class InvestmentsIdeas extends Component{

    render(){
        return(                        
                <Container>
                    <Row>
                    
                        <Col sm={{size:6}}>

                        <div class ="BitcoinAvailable">
                            <h3>My Investments</h3>
                            <p>Check all your investments and profits from ideas</p>

                            <div className ="Rectangle"></div>

                            
                        </div>

                        </Col>
                    
                    </Row>
                </Container>
        )
    }
};