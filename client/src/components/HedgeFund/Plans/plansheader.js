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
                         <Col sm="12" md={{ size: 8, offset: 3 }}><h1 className ="animated fadeIn">Hedgefunds</h1>
                         <p className ="animated fadeInUp">Plan for investors, who are looking for stable income.</p> 
                        </Col>
                    </Row>
                </Container>
                </div>
                
                
                <div className = "SectionHeaderRight">
                    <img className ="animated fadeIn" alt ="Hedgefund home" src={planimg}/> 
                </div>
            </div>

        )
    }
};
