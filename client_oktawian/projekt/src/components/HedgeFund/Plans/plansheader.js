import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import planimg from '../../../img/planimg.jpg'

export class PlansHeader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1>Plans for investors</h1>
                        <p>Do you want to participate in the platform's operation?</p> 
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
