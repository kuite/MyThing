import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

export class Browseideaheader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">                               
                <Container>
                    <Row>
                        <Col sm={{size:12}}><h1>The freshest concepts</h1>
                        <p>Let's explore and support projects for their implementation</p> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};
