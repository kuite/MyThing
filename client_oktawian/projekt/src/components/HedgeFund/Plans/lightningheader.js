import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap';

import planimg from '../../../img/planimg.jpg'

export class LightningHeader extends Component{

    render(){
        return(
            <div className ="SectionsHeader">      
             <div className ="HeaderLeft">                         
                <Container>
                    <Row>
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1 className ="animated fadeIn">Lightning Hedgefund</h1>
                        <p className ="animated fadeInUp">It's more risky, but has higher ROI.</p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                    <img className ="animated fadeIn" alt ="Lightning Plan" src={planimg}/> 
                </div>
            </div>

        )
    }
};
