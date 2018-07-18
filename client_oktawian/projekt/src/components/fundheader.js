import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

export class Fundheader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">                               
                <Container>
                    <Row>
                        <Col sm={{size:12}}><h1>Support for your strategy</h1>
                        <p>Submit your idea and get support</p> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};
