import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import planimg from '../../../img/planimg.jpg'

export class StormHeader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1>Storm Hedgefund</h1>
                        <p>Long term - it is designed for mature investors. </p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                    <img src={planimg}/> 
                </div>
            </div>

        )
    }
};
