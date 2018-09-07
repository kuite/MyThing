import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';


export class IncreaseHeader extends Component{

    render(){
        return(
            <div>                               
                <Container>
                    <Row>
                        <Col sm={{size:12}}><h1>Welcome! You can use this platform for:</h1>
                        <br/>
                        <p>
                        - Add your fundraiser for and expect sponsors <br/>
                        - Contributing to other ideas & helping them achieve success  <br/>
                        - Purchase a hedgefund and participate in the cryptocurrency rotation <br/>
                        </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};